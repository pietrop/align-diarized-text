const addTimecodesToQuotes = require('./add-timecodes-to-quotes/index.js');
const generateInteractiveTranscript = require('./generate-html-to-check-alignement/index.js');

module.exports = addTimecodesToQuotes;
module.exports.addTimecodesToQuotes = addTimecodesToQuotes;
module.exports.generateInteractiveTranscript = generateInteractiveTranscript;