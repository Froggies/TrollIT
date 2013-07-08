define(['character', 'crafty', 'underscore', 'popupManager'], 
  function (character, Crafty, _, popupManager) {

  'use strict';

  return (function () {

    /**
     * Game
     * @constructor
     */
    function Game() {
    }

    /**
     * Launch the game, starting the main loop
     */
    Game.prototype.start = function () {
      Crafty.init(800, 600);
      Crafty.background('rgb(249, 223, 125)');

      Crafty.e('Character').attr({
        x: 50,
        y: 50
      });

      new popupManager().showPopup("Troll IT est un gros TROLL :D");
    };

    Game.prototype.stop = function () {
      Crafty.stop(true);
    };

    /**
     * Display FPS numbers at the top left corner
     */
    Game.prototype.showFPS = function () {
      if (_.isUndefined(this.fpsE)) {
        this.fpsE = Crafty.e("2D, DOM, FPS, Text");
        this.fpsE.attr({
          maxValues: 10
        });
        this.fpsE.bind("MessureFPS", function (fps) {
          this.text("FPS" + fps.value);
        });
      } else {
        this.toggleFPS();
      }
    };

    Game.prototype.toggleFPS = function () {
      if (!_.isUndefined(this.fpsE)) {
        this.fpsE.toggleComponent("2D, DOM, FPS, Text");
      }
    };

    /**
     * Hide FPS numbers
     */
    Game.prototype.hideFPS = function () {
      this.toggleFPS();
    };

    return Game;

  })();
});