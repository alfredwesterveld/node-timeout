'use strict';

const TIMEOUT   = 15;

const notifier  = require('node-notifier');

function notification (title, message) {
    notifier.notify({
        title: title || '',
        message: message || '',
        sound: true, // Only Notification Center or Windows Toasters
        wait: true // Wait with callback, until user action is taken against notification
    }, function(err, response) {
        // Response is response from notification
    });
}
module.exports = function notify(title, message) {
    notification(title, message);

    notifier.on('click', function(notifierObject, options) {
        // Triggers if `wait: true` and user clicks notification
        console.log('click');
    });

    notifier.on('timeout', function(notifierObject, options) {
        // Triggers if `wait: true` and notification closes
        console.log('timeout');
        setTimeout(() => {
            notification(title, message);
        }, TIMEOUT);
    });
}
