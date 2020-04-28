const fs = require('fs');
const addTimecodesToQuotes = require('./index.js');

const linesWithSpeaker = require('../../sample-data/input-example.json');
const sttJson = require('../../sample-data/stt-transcript.json')

const res = addTimecodesToQuotes(linesWithSpeaker, sttJson);
// console.log(JSON.stringify(res, null, 2))
// console.log('done')
fs.writeFileSync('./sample-data/aligned-output.json', JSON.stringify(res, null, 2));