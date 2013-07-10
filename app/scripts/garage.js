define(['crafty'], function (Crafty) {

  Crafty.scene('garage', function () {
    Crafty.e('HTML').attr({
      x: 1 * 40 + 100,
      y: 1 * 60 + 10
    }).append('<p class="announcement">Scène 2</p>');

  });

  return {
    start: function () {
      Crafty.scene('garage');
    }
  }

});