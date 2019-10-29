const csvToJson = require('convert-csv-to-json');
const align = require('alignment-from-stt');
const alignSTT = require('@bbc/stt-align-node').alignSTT;
const fs = require('fs');

function findWordsRangeForQuoteInTranscript(quote, words){
    const quoteStart = quote.start;
    const quoteEnd = quote.end;
    const wordResults = words.filter((word)=>{
       return word.start >= quoteStart &&  word.end <= quoteEnd
    });
    return wordResults;
}

function addTimecodesToQuotes(csvFileInputName, sttTranscript) {
    /**
     * Converting CSV file to json
     */
    // TODO: issue in having, as separator value.
    const json = csvToJson.fieldDelimiter('\t').getJsonFromCsv(csvFileInputName);

    /**
     * helper function 
     * @param {string} text - eg '"id"' returns string 'id' without extra "
     */
    function removeQuotations(text) {
        return text.replace(/\"/g, '')
    }

    function removEscapedSlash(text) {
        return text.replace(/\\/g, '')
    }

    const sanitizedCsvToJson = json.map((quote) => {
        const res = {};
        Object.keys(quote).forEach((key) => {
            const keySanitzed = removeQuotations(key);
            const valueSanitized = removeQuotations(quote[key]);
            const valueSanitizedFromSlashses = removEscapedSlash(valueSanitized)
            res[keySanitzed] = valueSanitizedFromSlashses;
        })

        return res;
    })

    // // prep quotes from CSV for alignement. 
    // // to be all in one string, separated by new line
    // console.log(sanitizedCsvToJson) 
    // fs.writeFileSync('./sanitized.json', JSON.stringify(sanitizedCsvToJson,null,2))
    const humanCorrectedTranscription = sanitizedCsvToJson.map((quote) => {
        return quote.body
    }).join('\n')


    // Need to align the accurate text with json of words via diffing algo
    // to make it easier for later word level alignement to do it's matching.
    const resultAlignedSttWords = alignSTT(sttTranscript, humanCorrectedTranscription);
    // fs.writeFileSync('./resultAlignedSttWords.json', JSON.stringify(resultAlignedSttWords,null,2));
    // // line level alignement 
    const reAlignedTranscription = align(humanCorrectedTranscription, resultAlignedSttWords, 'text', false);

    // add word level timecodes to the quote o j
    const reAlignedTranscriptionWithWords = reAlignedTranscription.map((quote)=>{
        const wordsInRange = findWordsRangeForQuoteInTranscript(quote, resultAlignedSttWords);
        quote.words = wordsInRange;
        return quote;
    })
    // add speakers back to sentences
    const quotesWithTiems = sanitizedCsvToJson.map((quote) => {
        const match = reAlignedTranscriptionWithWords.find((elem) => {
            return quote.body === elem.text;
        })
        if (match) {
            return {...match, ...quote }
        }
    })

    // quick fix - removing null element at the end of array
    // need to look into why there's a null element tho
    quotesWithTiems.pop()
    return quotesWithTiems;
}

module.exports = addTimecodesToQuotes;