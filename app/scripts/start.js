define(['crafty', 'character', 'underscore', 'popupManager', 'garage'], function (Crafty, character, _, PopupManager, garage) {

  'use strict';

  var StartScene = (function () {

    /**
     */
    function StartScene() {
      var self = this;
      Crafty.scene('start', function () {
        console.log('beginning scene 1');
        self.characters = self.createCharacters(['Robert', 'Mélanie', 'Eric', 'Aurélie', 'David']);

        var transition = Crafty.e('HTML, Delay').attr({
          x: 1 * 40 + 100,
          y: 1 * 60 + 10
        });

        transition.delay(function () {
          _.each(self.characters, function (char) {
            char.entity.visible = false;
            char.dialog.visible = false;
          });
          this.append('<p class="announcement">C\'est comme ca que débuta le début d\'une... grosse galère</p>');
          PopupManager.showPopup('Démarrer le jeu ?', function () {
            garage.start();
          });
        }, 4000);

        self.characters[0].dialog.append('<p class="char-dialog">Bon c\' est décidé je vais créer ma boite et je vais leur montrer moi !</p>');

        self.characters[1].dialog.delay(function () {
          this.append('<p class="char-dialog">Ouais !<p>');
        }, 1000);

        self.characters[3].dialog.delay(function () {
          this.append('<p class="char-dialog">Trololol !<p>');
          self.characters[0].dialog.replace('');
        }, 1500);

        self.characters[4].dialog.delay(function () {
          this.append('<p class="char-dialog">Tu vas travailler où ?<p>');
          self.characters[1].dialog.replace('');
          self.characters[3].dialog.replace('');
        }, 2000);

        self.characters[0].dialog.delay(function () {
          this.replace('<p class="char-dialog">Dans mon garage ...<p>');
        }, 3000);
      });
    }

    StartScene.prototype.begin = function () {
      Crafty.scene('start');
    };

    StartScene.prototype.createCharacters = function (names) {
      return _.map(names, function (name, key) {
        var entity = Crafty.e('Character').attr({
          x: key * 40 + 100,
          y: key * 60 + 50
        });
        var dialog = Crafty.e('HTML, Delay').attr({
          x: key * 40 + 100,
          y: key * 60 + 10
        });
        console.log('creating character', name, 'at x:', entity.x, 'y:', entity.y);
        return {
          entity: entity,
          dialog: dialog,
          name: name
        };
      });
    };

    return StartScene;
  })();


  return StartScene;

});