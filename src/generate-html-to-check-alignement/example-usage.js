const generateInteractiveTranscript = require('./index.js');
const debate26 = require('../../timed-quotes-output/debate-26.json');
// const audioUrl = `file:///${__dirname}/debates/Democratic Presidential Debate - June 26 (Full) | NBC News/_-vJ6MrDO0kgY.mp4`;
const audioUrl = 'file:///Users/passarellip/CODE/WORK/Democratic%20Presidential%20Debate%20STT%20Analyses/debates/Democratic%20Presidential%20Debate%20-%20June%2026%20(Full)%20%7C%20NBC%20News/_-vJ6MrDO0kgY.mp4';
const title = 'Democratic Presidential Debate - June 26 (Full) | NBC News';

const res = generateInteractiveTranscript(title, audioUrl, debate26);

console.log(res);