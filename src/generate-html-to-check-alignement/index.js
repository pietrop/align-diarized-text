const timecodes = require('node-timecodes');
const htmlWrapper = require('./html-wrapper.js');

const generateTitle = (title) => `<h1 class="article_header">${title}</h1>`;

const generateAudioElement = (audioUrl) => `<div class="containerAudio">
    <video src="${audioUrl}" controls></video>
  </div>`;

// NOTE: if you want to tweak paragraphs display, this is it.
// if we have word level timings for a line, make word level interactivity
// otherwise stick with line level
const generateLines = (line) => {
    let result = `<strong>${line.speaker}</strong>:  
                 <span class="words" data-start=${line.start}>${timecodes.fromSeconds(line.start)} </span> - <span class="words" data-start=${line.end}>${timecodes.fromSeconds(line.end)}</span><br>`;
    if(line.words){
        line.words.forEach((word)=>{
            result += `<span class="words" data-start=${word.start}>${word.text} </span>`
        })
    }
    else {
        result+=`<span class="words" data-start=${line.start}>${line.text} </span>`
    }
    return result;
};

const generateTranscript = (transcript) => {
    const result = transcript.map((paragraph) =>
        `<p>${generateLines(paragraph)}</p>
        `
    );
    return result.join('');
};

const generateInteractiveTranscriptHtml = (title, audioUrl, transcript) => {
    const audioElement = generateAudioElement(audioUrl);
    const transcriptElement = `<article>${generateTranscript(transcript)}</article>`;
    const podcastTitle = generateTitle(title);
    const data = `${audioElement}<div class="container">${podcastTitle}${transcriptElement}</div>`;
    return htmlWrapper(data);
};


const generateInteractiveTranscript = (title, audioUrl, transcript) => {
    const htmlPage = generateInteractiveTranscriptHtml(title, audioUrl, transcript);
    return htmlPage;
};


module.exports = generateInteractiveTranscript;