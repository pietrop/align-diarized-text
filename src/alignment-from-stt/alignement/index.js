/**
 * Using levenshtein to align transcription 
 * to do line level alignement. 
 */
// Word Error Rate, WER, algorithm module 
const Levenshtein = require('fast-levenshtein');
const textSegmentation = require('../text-segmentation/index.js');

// const alignJSONText = require('../align-json-to-text/index.js')

// Kaldi Transcription Json
/**
 * 
 * @param {array} currentSentence - eg [ 'for', 'this', 'is', 'our', 'relationship', 'with' ]
 * @param {string} word - eg animals.
 * @return {string} - eg "for this is our relationship with animals"
 */
function addWordToLine(currentSentence, wordText) {
    return [...currentSentence, wordText].join(' ')
}

function align(accurateBaseText, automatedTranscription, textAttributeName = 'text', segmentationBasedOnSBD = true) {
    console.log('ALIGN')
    // console.log(automatedTranscription)
    // Lines text to align, array of lines strings. - programmatic you need honorifics to break on full stop.
    // TODO: could segment text using this module
    // https://github.com/pietrop/subtitlesComposer/tree/master/text_segmentation
    // const lines = require('./not-welcome-here-lines')

    // remove this char ’
    // Array of human transcription text segmented into lines 

    const accurateBaseTextLines = segmentationBasedOnSBD ? textSegmentation(accurateBaseText) : accurateBaseText.split('\n');;
    // word error distance for WER, start with high number
    let currentDist = 10000
        // first line taken into consideration 
    let currentLineCounter = 0
        // timecode start of the sentence -> from STT system
    const firstWord = automatedTranscription[0];
    let currentStart = firstWord.start

    // timecode end of the sentence -> from STT System 
    let currentEnd = 0
        // the list of words that compose the sentence we are currently looking at.
    let currentSentenceFromAutomatedText = []
        // array of sentence 
    const transcript = [];
    // let tmpWordsList =[];
    /**
     * every word from the alignement 
     * is looking at levenshtein distance of between the current sentence from the STT system(eg Kaldi) 
     * and the line from the original text (Manual accurate transcription )
     * 
     * 
     *  at a high level The idea is: 
     * If you are adding the right word to the sentence the levenshtein distance is going to decrease. 
     * If the levenshtein is increasing it means you are going into another sentence
     * 
     * so that gives you beginning and end time-code for that sentence.
     * 
     * Never looking into the actual words from STT system (eg Kaldi) only considering the timecodes.
     * 
     */
    // let automatedTranscriptionSegment =[];
    automatedTranscription.forEach((currentWord, i) => {

        // Works out the distance between current sentence + current word vs current line.
        // take the current sentence array, add current word string, join into a string, and compare that to the line from the base transcription.
        // returns the number of letters that are different. eg if same words 0.

        //  word[textAttributeName] ==> is the text in the transcription word object.
        // TODO: change this to .text  or something more API compatible 

        // adds a word at a time to current sentence
        // console.log(accurateBaseTextLines[currentLine])
        if (accurateBaseTextLines[currentLineCounter] === undefined) {
            return;
        }

        const currentLineFromBaseText = accurateBaseTextLines[currentLineCounter];
        const lineWithNewWordFromAutomatedText = addWordToLine(currentSentenceFromAutomatedText, currentWord[textAttributeName]);

        // edge case - wrapping up last match
        // handling last line of input
        if(automatedTranscription.length-1 === i){
            // just to make sure the line is not already in there 
            if(transcript.length < 1 || (transcript[transcript.length-1].text!==accurateBaseTextLines[currentLineCounter])){
                transcript.push({
                    start: currentStart,
                    end: currentWord.end,
                    // getting line from base transcription 
                    text: accurateBaseTextLines[currentLineCounter] 
                })
                console.log(accurateBaseTextLines[currentLineCounter] )
            }
        }
        
        const dist = Levenshtein.get(lineWithNewWordFromAutomatedText, currentLineFromBaseText)
            // distance calculate is inferior to current distance, 
            // means you are adding the word, coz it's matching the original string in base transcription line
            // if the distance is getting smaller you found right word and adding to the sentence.
        if (dist < currentDist) {
            // console.log('-->smaller distance<--')
            // currentEnd is the timecode for the end of the line 
            // the last time code of the sentence
            currentEnd = currentWord.end
                // change distance to current distance
            currentDist = dist
                // tmpWordsList.push({
                //     start: currentWord.start,
                //     end: currentWord.end,
                //     text: currentWord[textAttributeName]
                // });
                // add word to the sentence 
                // TODO: word.end, and word.start could be added here to get word level timing.
                // currentLine split onto space, and then ... TBC to figure out
            currentSentenceFromAutomatedText.push(currentWord[textAttributeName])
                // automatedTranscriptionSegment.push(currentWord)
                
        } else {
            
            // console.log(currentSentence.join(' '));
            // console.log(accurateBaseTextLines[currentLine])
            // console.log('{words: automatedTranscriptionSegment}',{words: automatedTranscriptionSegment},accurateBaseTextLines[currentLineCounter])
            // If the distance increases, then we got to the end of the line that matches.
            transcript.push({
                    start: currentStart,
                    end: currentEnd,
                    // getting line from base transcription 
                    text: accurateBaseTextLines[currentLineCounter] //,
                        // words: alignJSONText(accurateBaseTextLines[currentLineCounter],currentStart,currentEnd)
                        // words: alignJSONText({words: automatedTranscriptionSegment}, accurateBaseTextLines[currentLineCounter])
                })
                // automatedTranscriptionSegment =[];
                // reset tmpWordsList
                // tmpWordsList =[]
                // tmpWordsList.push({
                //     start: currentWord.start,
                //     end: currentWord.end,
                //     text: currentWord[textAttributeName]
                // });
                // move onto next line

            currentLineCounter++
            // reset all values
            currentDist = 10000
                // using the last word that did not fit in previous sentence.
            currentStart = currentWord.start
                // 
            currentEnd = currentWord.end
                // rest current sentence word list with unmatched word from ASR

            currentSentenceFromAutomatedText = [currentWord[textAttributeName]]

            // still got some lines to align but algorithm has run over. 
            // emperically not happened, but edge case.
            if (currentLineCounter >= accurateBaseTextLines.length) {
                console.error("OOOOPS", i, automatedTranscription.length)
            }
        }
    })

    return transcript;
}

module.exports = align;