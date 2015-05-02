// You can put related scripts in here
// @@include('../node_modules/fastclick/lib/fastclick.js');

// @@include('../node_modules/bootstrap/js/collapse.js');
// @@include('../node_modules/bootstrap/js/transition.js');

// @@include('../node_modules/bootstrap/js/alert.js');
// @@include('../node_modules/bootstrap/js/button.js');
// @@include('../node_modules/bootstrap/js/carousel.js');
// @@include('../node_modules/bootstrap/js/dropdown.js');
// @@include('../node_modules/bootstrap/js/modal.js');
// @@include('../node_modules/bootstrap/js/tab.js');

// Track JavaScript errors in Google Analytics
(function(window){
    var undefined,
        link = function (href) {
            var a = window.document.createElement('a');
            a.href = href;
            return a;
        };
    window.onerror = function (message, file, line, column) {
        var host = link(file).hostname;
        ga('send', {
          'hitType': 'event',
          'eventCategory': (host == window.location.hostname || host == undefined || host == '' ? '' : 'external ') + 'error',
          'eventAction': message,
          'eventLabel': (file + ' LINE: ' + line + (column ? ' COLUMN: ' + column : '')).trim(),
          'nonInteraction': 1
        });
    };
}(window));
