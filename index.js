const now               = Date.now();
const epoch             = require('./when')();
const notify            = require('./notifier');
const argv              = require('minimist')(process.argv.slice(2));
const { title, msg }    = argv;

if (title && msg) {
    const ms = epoch - now;
    console.log(`sleep for ${ms}`);
    setTimeout(() => {
        console.log('wake up')
        notify(title, msg);
    }, ms);
}
