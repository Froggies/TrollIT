define(['popupManager', 'jquery'], function (PopupManager, $) {

  'use strict';

  describe('popupManager', function () {

    it('should display a sentence and hidden it on click ok button', function () {
      var sentence = 'TrollIT est un gros TROLL !';
      PopupManager.showPopup(sentence);
      expect($('#popup')).toBeDefined();
      expect($('#popup .popup-content').text()).toBe(sentence);
      expect($('#popup .popup-footer .popup-footer-button-valider')).toBeDefined();
      $('#popup .popup-footer .popup-footer-button-valider').trigger('click');
      expect($('#popup').length).toBe(0);
    });

    it('should callback function on click ok button', function () {
      var test = 0;
      PopupManager.showPopup("sentence", function () { test = 1 });
      $('#popup .popup-footer .popup-footer-button-valider').trigger('click');
      expect(test).toBe(1);
    });

    it('should stack popups', function () {
      PopupManager.showPopup("sentence1", function () { console.log('OK'); });
      PopupManager.showPopup("sentence2", function () { console.log('OK'); });
      expect($('#popup .popup-content').text()).toBe("sentence1");
      $('#popup .popup-footer .popup-footer-button-valider').trigger('click');
      expect($('#popup .popup-content').text()).toBe("sentence2");
      $('#popup .popup-footer .popup-footer-button-valider').trigger('click');
      expect($('#popup').length).toBe(0);
    });

    it('should display multiple choises popups', function () {
      PopupManager.showChoises([
        {value:1, display:'TrollIT'}, 
        {value:2, display:'est un gros TROLL !'}
      ]);
      expect($('#popup .popup-content ul li').length).toBe(2);
      $('#popup .popup-footer .popup-footer-button-valider').trigger('click');
      expect($('#popup').length).toBe(0);
    });

    it('should callback function (with selected option) on click ok button', function () {
      var res = "";
      PopupManager.showChoises([
        {value:"firstChoise", display:'TrollIT'}, 
        {value:"secondChoise", display:'est un gros TROLL !'}
      ], function(v) { res = v; });
      $('#popup .popup-footer .popup-footer-button-valider').trigger('click');
      expect(res).toBe("firstChoise");
    });

  });

});