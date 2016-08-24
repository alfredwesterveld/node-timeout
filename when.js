'use strict';

const moment = require('moment');
const argv   = require('minimist')(process.argv.slice(2));
const logger = require('tracer').colorConsole();

module.exports = function () {
    if (argv.h >= 0 && argv.m >= 0  && argv.s >= 0) {
        logger.debug('exact');

        return moment()
            .hours(argv.h)
            .minutes(argv.m)
            .seconds(argv.s)
            .valueOf();
    } else if (argv.a) {
        logger.debug('add')

        const when = moment();

        argv.h >= 0 && when.add(argv.h, 'hours');
        argv.m >= 0 && when.add(argv.m, 'minutes');
        argv.s >= 0 && when.add(argv.s, 'seconds');

        return when.valueOf();
    } else {
        logger.debug('no when');
    }
}
