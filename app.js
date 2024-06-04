const schedule  = require('node-schedule');
const logger = require('./middleware/logger');
const parser = require('expression-parser/parse');
const valuer = require('expression-parser/values');

logger.loginfo('app start');

const ast = parser('((a*b)/c)+d');

const val = valuer.fromAST(ast)({a:10,b:7,c:4,d:1});

console.log(val[0])

const rule = new schedule.RecurrenceRule();

const job = schedule.scheduleJob('*/5 * * * *', () => {
    logger.loginfo('timer tick');
})
