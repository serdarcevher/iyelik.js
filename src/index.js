const handler = require('./library/handler');
const samples = require('./sample-words');

String.prototype.iyelik = function (person, isPlural = false) {
    return new handler().get(this, person, isPlural);
};

module.exports.handler = handler;
module.exports.samples = samples;