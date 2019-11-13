# Getting sample media and transcript

Media 
NBC 1: https://www.youtube.com/watch?v=vJ6MrDO0kgY | June 26  

## Downloading video files

### From Youtube ✔️ 
https://github.com/pietrop/electron-video-downloader
Mac OSX app, wrapper around youtube dl

### From Youtube
Unfortunately [`electron-video-downloader`](https://github.com/pietrop/electron-video-downloader) transcription extrapolated from the captions has got repeated tex because of the "karaoke" effect in youtube captions vtt file.

But you can use this chrome extension to get the transcript from youtube https://github.com/pietrop/get-youtube-text

Looks like the text is similar all caps text you get from C-Span captions. To format that text could use [`formatText`](https://github.com/OpenNewsLabs/c-span_opened_captions_server/blob/master/index.js#L61)



## Generating STT

you can juse [`OpenNewsLabs/pocketsphinx-stt`](https://github.com/OpenNewsLabs/pocketsphinx-stt) to generate STT transcription.


### Speaker diarization info

You'd still need to add speaker diarization info at line level to the accurate transcription. Unless you can find a transcript that already has it, eg as a `csv` or `tsv` file.

You could also import  the STT in [@bbc/react-transcript-editor demo](https://bbc.github.io/react-transcript-editor/?path=/story/*)
    - add speaker labels and review speakers segmentation 
    - export dpe json 
    - convert dpe json to line level line in input example in README.

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