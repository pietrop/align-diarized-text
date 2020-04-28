const fs = require('fs');
const align = require('./index.js');

/**
 * Moby Dick example
 */ 
// const automatedTranscription = require('../sample-data/moby-dick/moby-dick-chapter-1-kaldi-stt.json').retval.words;
// // const automatedTranscription = require('../sample-data/moby-dick/moby-dick-chapter-1-kaldi-stt-no-librevox-intro.json').retval.words;

// // // array of words, each .end, .start., .transcript_text;
// const humanCorrectedTranscription = fs.readFileSync('./sample-data/moby-dick/moby-dick-chapter-1.txt').toString();
// const reAlignedTranscription = align(humanCorrectedTranscription,automatedTranscription, 'punct');
// // // generate example file for automated testing 
// fs.writeFileSync('./sample-output/moby-dick-sample-line-aligned-output.json',JSON.stringify(reAlignedTranscription,null,2) )
// console.log(JSON.stringify(reAlignedTranscription,null,2))  

/**
 * Ted Talk Kate Darling Example
 */
// const automatedTranscription = require('../sample-data/ted-talk-Kate-Darling-robot-emotions/ted-talk-bbc-kaldi.json').retval.words;
// const humanCorrectedTranscription = fs.readFileSync('./sample-data/ted-talk-Kate-Darling-robot-emotions/ted-talk-transcript.txt').toString();
// const reAlignedTranscription = align(humanCorrectedTranscription,automatedTranscription, 'punct');

// // fs.writeFileSync('./sample-output/ted-talk-kate-darling-aligned-output.json',JSON.stringify(reAlignedTranscription,null,2) )
// console.log(JSON.stringify(reAlignedTranscription,null,2))  
// console.log('finished aligning')


/**
 * Edge
 */
const automatedTranscription = require('../sample-data/other/stt-transcript.json');
const hct = require('../sample-data/other/input-example.json')
const humanCorrectedTranscription =  hct.map((p)=>{return p.text}).join(' ');
console.log('automatedTranscription',automatedTranscription)
const reAlignedTranscription = align(humanCorrectedTranscription,automatedTranscription.words, 'text');
// console.log('reAlignedTranscription',reAlignedTranscription)
fs.writeFileSync('./sample-output/other-aligned-output.json',JSON.stringify(reAlignedTranscription,null,2) )
// console.log(JSON.stringify(reAlignedTranscription,null,2))  
// console.log('finished aligning')
