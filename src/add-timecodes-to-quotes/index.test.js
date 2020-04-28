const addTimecodesToQuotes = require('./index.js');
const linesWithSpeaker = require('../../sample-data/input-example.json');
const sttJson = require('../../sample-data/stt-transcript.json')


test('Expect same number of paragraphs as the input', () => {
    const res = addTimecodesToQuotes(linesWithSpeaker, sttJson);
  expect(linesWithSpeaker.length).toBe(res.length);
});