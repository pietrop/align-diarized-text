const fs = require('fs');
const generateInteractiveTranscript = require('./index.js');
const alignedOutput = require('../../sample-data/aligned-output.json');

// audio file needs to be in public folder
const audioUrl = '_-vJ6MrDO0kgY.mp4';
const title = 'Test';

const res = generateInteractiveTranscript(title, audioUrl, alignedOutput);

fs.writeFileSync('./public/index.html', res)
console.log('done, check out public folder index.html in your browser');