define(['jquery'], function ($) {

  'use strict';

  var template = [
    '<div id="glass"></div>',
    '<div id="popup">',
    '<div class="popup-header">',
    '{{title}}',//3
    '<span class="popup-header-button">X</span>',
    '<span class="popup-header-button">_</span>',
    '</div>',
    '<div class="popup-content">',
    '{{content}}',//8
    '</div>',
    '<div class="popup-footer">',
    '<div class="popup-footer-button popup-footer-button-valider">Valider</div>',
    '</div>',
    '</div>'    
  ];

  function compileTemplate(title, content) {
    var compiled = template.splice(0);
    compiled[3] = title;
    compiled[8] = content;
    return compiled.join('');
  }

  function hide(callback) {
    $('#glass').remove();
    $('#popup').remove();
    if (callback) {
      callback();
    }
  }

  return (function () {

    /**
     * PopupManager
     * @constructor
     */
    function PopupManager() {
    }

    /**
     * Display sentence
     */
    PopupManager.prototype.showPopup = function (sentence, callback) {
      $(document.body).append(compileTemplate('infos', sentence));
      $('#popup .popup-header .popup-header-button').unbind().click(function () {
        hide(callback);
      });
      $('#popup .popup-footer .popup-footer-button-valider').unbind().click(function () {
        hide(callback);
      });
    };

    /**
     * Display choises
     * 
     * 
     */
    // PopupManager.prototype.showChoises = function (choises) {
    //   choises.
    // };

    return PopupManager;

  })();
});