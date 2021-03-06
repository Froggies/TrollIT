define(['jquery', 'underscore'], function ($, _) {

  'use strict';

  var isShowingPopup = false,
  waitingPopups = [],
  template = [
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

  function compileTemplate(args) {
    var compiled = template.slice(0);
    compiled[3] = args.title;
    compiled[8] = args.sentence;
    return compiled.join('');
  }

  function showNext() {
    if (isShowingPopup === false && waitingPopups.length > 0) {
      isShowingPopup = true;
      var data = _.first(waitingPopups);
      waitingPopups = _.rest(waitingPopups);
      $(document.body).append(compileTemplate(data));
      $('#popup .popup-header .popup-header-button').unbind().click(function () {
        hide(data.callback, data.isChoise);
      });
      $('#popup .popup-footer .popup-footer-button-valider').unbind().click(function () {
        hide(data.callback, data.isChoise);
      });
    }
  }

  function hide(callback, isChoise) {
    var callbackData;
    if (isChoise && callback) {
      callbackData = $('input[type=radio][name=radioPopup]:checked').attr('value');
    }
    $('#glass').remove();
    $('#popup').remove();
    if (callback) {
      callback(callbackData);
    }
    isShowingPopup = false;
    showNext();
  }

  return {

    /**
     * Display sentence
     * sentence : the sentence to display
     * callback : optional callback function with no params
     */
    showPopup: function (sentence, callback) {
      waitingPopups.push({title: 'Infos', sentence: sentence, callback: callback});
      showNext();
    },

    /**
     * Display choises
     * Display multiples choises
     * choises : array of object { value: val, display: label }
     * callback : optional callback function with value param
     */
    showChoises: function (choises, callback) {
      var sentence = '<ul>';
      var checked = 'checked';
      _.each(choises, function (choise) {
        sentence += '<li style="list-style:none">' +
          '<input type="radio" name="radioPopup" value="' + 
          choise.value + '"' + checked + '>' + choise.display + 
          '</li>';
        checked = '';
      });
      sentence += '</ul>';
      waitingPopups.push({title: 'infos', sentence: sentence, callback: callback, isChoise: true});
      showNext();
    }

  };
});