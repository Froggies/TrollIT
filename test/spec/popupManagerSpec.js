define(['popupManager'], function (PopupManager) {

  'use strict';

  describe('popupManager', function () {

    var popupManager;
    beforeEach(function () {
      popupManager = new PopupManager();
      console.log(popupManager);
    });

    afterEach(function () {
    });

    it('should display the final game', function () {
      expect(popupManager.showPopup).toBeDefined();
    });
  });

});