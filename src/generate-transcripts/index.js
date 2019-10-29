const fs = require('fs');
const path = require('path');
const transcribe = require('pocketsphinx-stt');

// TOODO: should escape spaces, and ( ) and other symbol, for unix path
function escapeSpaces(text){
    return text.replace(/(\s+)/g, '\\$1');
    // return escape(text);
}
const folderName ='Democratic Presidential Debate - July 30 | CNN';
const videoFileName = 'FULL 2nd Democratic debate 30 July 2019 (Night 1)-neVtNFPTsiQ.mp4';
// const videoFilePath = path.join(process.cwd(), 'debate', escapeSpaces(folderName), escapeSpaces(videoFileName));
// const videoFilePath = path.join(process.cwd(), 'debate', folderName, videoFileName);
// console.log('videoFilePath:: ', videoFilePath)

const videoFilePath = "/Users/passarellip/CODE/WORK/Democratic\ Presidential\ Debate\ STT\ Analyses/debates/Democratic\ Presidential\ Debate\ -\ July\ 30\ \|\ CNN/FULL\ 2nd\ Democratic\ debate\ 30\ July\ 2019\ \(Night\ 1\)-neVtNFPTsiQ.mp4";
const d = new Date();
console.log(d.toLocaleString()); // 
transcribe(videoFilePath).then((transcript) => {
    console.log('final result', transcript);
    const d2 = new Date();
    console.log(d.toLocaleString(), '-', d2.toLocaleString()) // 
    fs.writeFileSync(path.join(process.cwd(), 'debates', folderName,'pocketsphinx-transcript.json'), JSON.stringify(transcript, null, 2));
}).catch((e) => {
    console.error('ERROR::', e)
})