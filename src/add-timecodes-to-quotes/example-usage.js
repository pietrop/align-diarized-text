const fs = require('fs');
const path = require('path');
const addTimecodesToQuotes = require('./index.js');
const csvFileInputName = './debates-quotes-csv/debate_quotes - 26th.tsv';
const debate26 = require('../../debates/Democratic Presidential Debate - June 26 (Full) | NBC News/assemblyai-transcript.json')
const debate26thTitle = "NBC NEWS HOLDS DEMOCRATIC PRESIDENTIAL CANDIDATES DEBATE";

const debateJsonSegmentedTimes = path.join(process.cwd(), 'timed-quotes-output', 'debate-26.json')

const res = addTimecodesToQuotes(csvFileInputName, debate26);
// console.log(res)
// console.log('done')
fs.writeFileSync(debateJsonSegmentedTimes, JSON.stringify(res, null, 2));