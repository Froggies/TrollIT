define(['crafty'], function (Crafty) {

  'use strict';

  Crafty.c('Character', {
    init: function () {
      this.requires('2D, Canvas, Color').color('rgb(20, 125, 40)');
      this.attr({
        w: 10,
        h: 10
      });
    }
  });

});