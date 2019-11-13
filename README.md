## Brief of the project
<!-- _One liner + link to confluence page_
_Screenshot of UI - optional_ -->

<!-- throwaway test part 3  -->

_Work in progress_

A module to align stt transcription with accurate text that has got speaker labels.


## Setup
<!-- _stack - optional_
_How to build and run the code/app_ -->

```
git clone git@github.com:pietrop/align-diarized-text.git
```

```
cd align-diarized-text
```

See [docs notes 'analyses'](./docs/notes/analyses.md) for more info on getting the media and transcripts, in the right format for this.

## Usage

```
npm install align-diarized-text
```

see [example usage in `/src/add-timecodes-to-quotes/`](./src/add-timecodes-to-quotes/example-usage.js)

```js
const alignDiraizedText = require('./index.js');

const linesWithSpeaker = require('../../sample-data/input-example.json');
const sttJson = require('../../sample-data/stt-transcript.json')

const res = alignDiraizedText(linesWithSpeaker, sttJson);
// do something with output json 
```


To troubleshoot the aligement you can also use `generateInteractiveTranscript`, see [example usage in `/src/generate-html-to-check-alignement/`](./src/generate-html-to-check-alignement/example-usage.js) to generate an `index.html` file to troubleshoot the aligement.

### **input:**

#### 1. Json
An Array list of objects with text and speaker attribtues.

```json
[
  {
    "id": "6af9762b-d0aa-42d2-9d6d-1c114f9219db",
    "text": "Thank you. It's good to be here.",
    "speaker": "Elizabeth Warren"
  },
  {
    "id": "b02da04e-044e-436a-8862-166139568136",
    "text": "So I think of it this way, who is this economy really working for? It's doing great for a thinner and thinner slice at the top. It's doing great for giant drug companies. This is not doing great for people are trying to get a prescription filled. It's doing great for people who want to invest in private prisons just not for the African-Americans and Latinx whose families are torn apart whose lives are destroyed and whose communities are ruined.",
    "speaker": "Elizabeth Warren"
  },
...
```
The text is human accurate transcription, timecodes are missing, and speaker diraziation info is present.

This could be initially originated from a `.tsv` or `.csv` file, and converted to json with ['convert-csv-to-json'](https://www.npmjs.com/package/convert-csv-to-json).


#### 2. STT
STT array of timecoded words, This is generated from video/audio file of the debate. see [`sample-data`](./sample-data) folder more.

### **Output**
View [`timed-quotes-output`](./timed-quotes-output) folder for example output.

Something like this 

```json
[
  {
    "start": 144.94,
    "end": 168.31,
    "text": "Thank you. It's good to be here.",
    "words": [
      {
        "end": 145.18,
        "start": 144.94,
        "text": "Thank"
      },
      {
        "start": 145.2,
        "end": 145.66,
        "text": "you."
      },
      ...
    ],
    "id": "6af9762b-d0aa-42d2-9d6d-1c114f9219db",
    "speaker": "Elizabeth Warren"
  },
  ...
```

## System Architecture
<!-- _High level overview of system architecture_ -->

_TBC_


## Documentation

There's a [docs](./docs) folder in this repository.

[docs/notes](./docs/notes) contains dev draft notes on various aspects of the project. This would generally be converted either into ADRs or guides when ready.
<!-- 
[docs/adr](./docs/adr) contains [Architecture Decision Record](https://github.com/joelparkerhenderson/architecture_decision_record).

> An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.

We are using [this template for ADR](https://gist.github.com/iaincollins/92923cc2c309c2751aea6f1b34b31d95) -->

## Development env
 <!-- _How to run the development environment_ -->

 - npm > `6.1.0`
- [Node 10 - dubnium](https://scotch.io/tutorials/whats-new-in-node-10-dubnium)

Node version is set in node version manager [`.nvmrc`](https://github.com/creationix/nvm#nvmrc) 

<!-- _Coding style convention ref optional, eg which linter to use_ -->

<!-- _Linting, github pre-push hook - optional_ -->

## Build
<!-- _How to run build_ -->

_NA_

## Tests
<!-- _How to carry out tests_ -->

_NA_

## Deployment
<!-- _How to deploy the code/app into test/staging/production_ -->

_NA_