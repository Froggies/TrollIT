define(['crafty', 'popupManager'], function (Crafty, PopupManager) {

  'use strict';

  var price = 0,
    priceDisplay,
    contrats = [
      {value: 0, display: 'Contrat pour un CMS en sharepoint, 1 mois, 1000€', time: 1, price: 1000},
      {value: 1, display: 'Contrat pour un site vitrine responsive, déconnecté et géolocalisé, 2 mois, 500€', time: 2, price: 500},
      {value: 2, display: 'Contrat pour un client lourd de web-services, 5 mois, 3000€', time: 5, price: 3000}
    ];

  Crafty.scene('garage', function () {
    Crafty.e('HTML').attr({
      x: 1 * 40 + 100,
      y: 1 * 60 + 10
    }).append('<p class="announcement">Scène 2</p>');

    priceDisplay = Crafty.e('HTML').attr({
      x: 400,
      y: 1 * 60 + 10
    });
    priceDisplay.append('<p class="announcement">Argent : ' + price + '€</p>');

  });

  var Garage = {
    start: function () {
      Crafty.scene('garage');
      PopupManager.showChoises(contrats, function (choise) {
        var transition = Crafty.e('HTML, Delay').attr({
          x: 1 * 40 + 100,
          y: 1 * 60 + 10
        });

        transition.delay(function () {
          PopupManager.showPopup('Vous avez gagnez ' + contrats[choise].price + '€', function () {
            price += contrats[choise].price;
            priceDisplay.replace('<p class="announcement">Argent : ' + price + '€</p>');
            Garage.start();
          });
        }, contrats[choise].time * 1000);
      });
    }
  };

  return Garage;

});