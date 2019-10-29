# debate links

There should be 5 debates here. 2 nights from NBC, 2 from CNN, and the last from ABC.
NBC 1: https://www.youtube.com/watch?v=vJ6MrDO0kgY | June 26  
NBC 2: https://www.youtube.com/watch?v=cX7hni-zGD8 |  June 27 
CNN 1: https://archive.org/details/CNNW_20190731_000000_CNN_Democratic_Presidential_Debate | July 30 -> https://youtu.be/neVtNFPTsiQ
CNN 2: https://archive.org/details/CNNW_20190801_000000_CNN_Democratic_Presidential_Debate | July 31 -> https://youtu.be/vW3iUWIChfs  | https://youtu.be/Biv8qRfyVaY
ABC: https://www.nbcnews.com/video/full-video-democratic-presidential-debate-night-1-62758981769 | September 12 --> https://youtu.be/2UWVO0Trd1c




---



## Downloading video files

### From Youtube ✔️ 
https://github.com/pietrop/electron-video-downloader
Mac OSX app, wrapper around youtube dl


### From Internet archive ⌛

eg [https://archive.org/details/CNNW_20190731_000000_CNN_Democratic_Presidential_Debate](https://archive.org/details/CNNW_20190731_000000_CNN_Democratic_Presidential_Debate)

From internet archvie docs[](http://blog.archive.org/2012/04/26/downloading-in-bulk-using-wget/)
There is a `http://archive.org/download/<id>` end point 

eg in this case [`https://archive.org/download/CNNW_20190731_000000_CNN_Democratic_Presidential_Debate`](https://archive.org/download/CNNW_20190731_000000_CNN_Democratic_Presidential_Debate)



However that's a dead end coz 

>Files marked with lock are not available for download.

:(

BUT, the url gives you the file in 1 min interval

https://ia801408.us.archive.org/32/items/CNNW_20190731_000000_CNN_Democratic_Presidential_Debate/CNNW_20190731_000000_CNN_Democratic_Presidential_Debate.mp4?start=0&end=160&ignore=x.mp4

could scrape these as individual clips and then re-combined into one clip. 

The debate is about 3 hous..

### From ABC website

in network tab,  filtering from `mp4`


https://nbcnewsencoding-vh.akamaihd.net/i/nbcnews/video/2019/06/nbc_debate_full_night1_190626_922935286.mp4,,.csmil/index_0_av.m3u8?set-akamai-hls-revision=5


https://nbcnewsencoding-vh.akamaihd.net/i/nbcnews/video/2019/06/nbc_debate_full_night1_190626_922935286.mp4,,.csmil/segment1_0_av.ts?set-akamai-hls-revision=5

https://nbcnewsencoding-vh.akamaihd.net/i/nbcnews/video/2019/06/nbc_debate_full_night1_190626_922935286.mp4,,.csmil/segment2_0_av.ts?set-akamai-hls-revision=5


These are all 10 sec segments. but could be downloaded and stiched back together etc.. ?

## Downloading accurate transcription

### From Youtube
unfortunately [`electron-video-downloader`](https://github.com/pietrop/electron-video-downloader) transcription extrapolated from the captions has got repeated tex because of the "karaoke" effect in youtube captions vtt file.
But you can use this chrome extension to get the transcript from youtube https://github.com/pietrop/get-youtube-text

Looks like the text is similar all caps text you get from C-Span captions. To format that text could use [`formatText`](https://github.com/OpenNewsLabs/c-span_opened_captions_server/blob/master/index.js#L61)

### From Internet Archive

- Via API? :shrug:
- scrape fromt he UI

eg at page URL [https://archive.org/details/CNNW_20190731_000000_CNN_Democratic_Presidential_Debate](https://archive.org/details/CNNW_20190731_000000_CNN_Democratic_Presidential_Debate) in console do

```js
const text = [...document.querySelectorAll('.snipin.nosel')].map((el)=>{return el.innerText }).join('\n')
console.log(text)
```