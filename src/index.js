const addTimecodesToQuotes = require('./add-timecodes-to-quotes/index.js');
const generateInteractiveTranscript = require('./generate-html-to-check-alignement/index.js');
module.exports.generateInteractiveTranscript = generateInteractiveTranscript;
module.exports.addTimecodesToQuotes = addTimecodesToQuotes;
module.exports = addTimecodesToQuotes;