## Brief of the project
<!-- _One liner + link to confluence page_
_Screenshot of UI - optional_ -->

<!-- throwaway test part 3  -->

_Work in progress_

Ultime goal is to get speaker diarization and timecodes for quotes from Democratic Presidential Debate for R&D analyses.


## Setup
<!-- _stack - optional_
_How to build and run the code/app_ -->

```
git clone git@github.dowjones.net:newsroom-innovation/Democratic-Presidential-Debate-STT-Analyses.git
```

```
cd Democratic-Presidential-Debate-STT-Analyses
```

## Usage

_TBC_

For now read the [docs notes](./docs/notes) as very much work in progress.

**input:**
-  one of the `.tsv` files in [`debates-quotes-csv`](./debates-quotes-csv) eg `debate_quotes - 26th.tsv` - this contains quotes from the speakers we want to get timecodes for. These are considered to be accuate, human generated text.
- STT array of timecoded words, This is generated from video/audio file of the debate. see [docs notes 'debates-links'](./docs/notes/debates-links.md) for more on this.

**Output**
View [`timed-quotes-output`](./timed-quotes-output) folder for example output.

Something like this 

```js
[
  {
    "start": 144.94,
    "end": 168.31,
    "text": "Thank you. It's good to be here.",
    "id": "753280",
    "title": "NBC NEWS HOLDS DEMOCRATIC PRESIDENTIAL CANDIDATES DEBATE",
    "name": "Elizabeth Warren",
    "publication_date": "2019-06-26 0:00:00",
    "body": "Thank you. It's good to be here."
  },
  ...
  ```


## System Architecture
<!-- _High level overview of system architecture_ -->

_TBC_

## Documentation

There's a [docs](./docs) folder in this repository.

[docs/notes](./docs/notes) contains dev draft notes on various aspects of the project. This would generally be converted either into ADRs or guides when ready.

[docs/adr](./docs/adr) contains [Architecture Decision Record](https://github.com/joelparkerhenderson/architecture_decision_record).

> An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.

We are using [this template for ADR](https://gist.github.com/iaincollins/92923cc2c309c2751aea6f1b34b31d95)

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