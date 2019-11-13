# Analyses

Restoring timecodes to speaker diarized accurate transcription.

## Steps to prep

### Option 1

- Download videos
- Run videos through STT 
    - using https://github.com/bbc/digital-paper-edit-electron) for UI
    - STT credentials from https://app.assemblyai.com using 5hours monthly free tier
- correct speaker segmentstion (https://github.com/bbc/react-transcript-editor)
- export in DPE json format to get corrected speaker segmentation 

### Option 2

- install pocketsphinx locally [`OpenNewsLabs/pocketsphinx-stt`](https://github.com/OpenNewsLabs/pocketsphinx-stt)
- run alignement locally with [@bbc/stt-align-node](https://github.com/bbc/stt-align-node)
- import in [@bbc/react-transcript-editor demo](https://bbc.github.io/react-transcript-editor/?path=/story/*)
    - add speaker labels and review speakers segmentation 
    - export dpe json 

### option 3 

use [bbc/alignment-from-stt](https://github.com/bbc/alignment-from-stt)