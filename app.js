const schedule  = require('node-schedule');
const logger = require('./middleware/logger');

logger.loginfo('app start');

const rule = new schedule.RecurrenceRule();

const job = schedule.scheduleJob('*/5 * * * *', () => {
    logger.loginfo('timer tick');
})