define(['game'], function (Game) {

  'use strict';

  describe('game', function () {

    var game;
    beforeEach(function () {
      game = new Game();
      game.start();
    });

    afterEach(function () {
      game.stop();
    });

    it('should provide a start method', function () {
      expect(game.start).toBeDefined();
    });

    it('should allow to display FPS', function () {
      game.showFPS();
      var fpsEntities = Crafty("FPS Text");
      expect(fpsEntities.length).toBeGreaterThan(0);
    });

    it('should allow to hide FPS', function () {
      game.showFPS();
      game.hideFPS();
      var fpsEntities = Crafty("FPS Text");
      expect(fpsEntities.length).toEqual(0);
    });
  });

});