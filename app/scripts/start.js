define(['crafty', 'character', 'underscore', 'jquery'], function (Crafty, character, _) {

  'use strict';

  var StartScene = (function () {

    /**
     */
    function StartScene() {
      var self = this;
      Crafty.scene('start', function () {
        console.log('beginning scene 1');
        self.characters = self.createCharacters(['Robert', 'Mélanie', 'Eric', 'Aurélie', 'David']);

        self.characters[0].dialog.append('<p class="char-dialog">Bon c\' est décidé je vais créer ma boite et je vais leur montrer moi !<p>');

        self.characters[1].dialog.delay(function () {
          self.characters[1].dialog.append('<p class="char-dialog">Ouais !<p>');
        }, 2000);

        self.characters[3].dialog.delay(function () {
          self.characters[3].dialog.append('<p class="char-dialog">Trololol !<p>');
        }, 2000);

        self.characters[4].dialog.delay(function () {
          self.characters[4].dialog.append('<p class="char-dialog">Tu vas travailler où ?<p>');
        }, 4000);

        self.characters[0].dialog.delay(function () {
          self.characters[0].dialog.replace('<p class="char-dialog">Dans mon garage ...<p>');
        }, 6000);
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