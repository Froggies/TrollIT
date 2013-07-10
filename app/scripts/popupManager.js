define(['jquery'], function ($) {

  'use strict';

  var template = [
    '<div id="glass"></div>',
    '<div class="popup">',
    '<div class="popup-header">',
    '{{title}}',//3
    '<span class="popup-header-button">X</span>',
    '<span class="popup-header-button">_</span>',
    '</div>',
    '<div class="popup-content">',
    '{{content}}',//8
    '</div>',
    '<div class="popup-footer">',
    '<div class="popup-footer-button">Valider</div>',
    '</div>',
    '</div>'    
  ];

  function compileTemplate(title, content) {
    var compiled = template.splice(0);
    compiled[3] = title;
    compiled[8] = content;
    return compiled.join('');
  }

  return (function () {

    /**
     * PopupManager
     * @constructor
     */
    function PopupManager() {
    }

    /**
     * End of game
     */
    PopupManager.prototype.showPopup = function (sentence) {
      $(document.body).append(compileTemplate('infos', sentence));
    };

    return PopupManager;

  })();
});