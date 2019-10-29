const addTimecodesToQuotes = require('./add-timecodes-to-quotes/index.js');
const generateInteractiveTranscript = require('./generate-html-to-check-alignement/index.js');

function main(csvFileInputName, debateSTTWords, title, audioUrl) {

    const timecodedQuotes = addTimecodesToQuotes(csvFileInputName, debateSTTWords);

    const htmlPagePreview = generateInteractiveTranscript(title, audioUrl, timecodedQuotes);
    return { timecodedQuotes, htmlPagePreview };

}

module.exports = main;