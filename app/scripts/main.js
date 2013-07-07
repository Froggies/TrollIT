require.config({
  paths: {
    'components': '../components',
    'jquery': '../components/jquery/jquery',
    'underscore': '../components/underscore/underscore',
    'crafty': '../components/crafty/release/0.5.4/crafty'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'crafty': {
      exports: 'Crafty'
    }
  }
});


require(['game'], function (Game) {

  'use strict';

  var game = new Game();
  game.start();
  game.showFPS();

  window.setTimeout(function() {
    game.hideFPS();
  }, 5000);


  window.setTimeout(function() {
    game.showFPS();
  }, 15000);

});






