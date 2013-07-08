define([], function () {

  'use strict';

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
    PopupManager.prototype.showPopup = function(sentence) {
      window.alert(sentence);
    }

    return PopupManager;

  })();
});