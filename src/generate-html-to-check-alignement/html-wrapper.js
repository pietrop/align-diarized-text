const htmlWrapper = (data, styles) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Interactive Transcript</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Interactive Transcript">
  <meta name="Test" content="Test">
  <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css" 
    integrity="sha256-piqEf7Ap7CMps8krDQsSOTZgF+MU/0MPyPW2enj5I40=" 
    crossorigin="anonymous" />
    <style>
       ${styles? styles: `.before {
        color: black;
    }
    
    .after {
        color: grey;
    }
    
    /* for index page */
    .transcriptBtn {
        border: 0.1rem solid lightgrey;
        border-radius: 0.5em;
        padding: 0.5em;
        font-family: Retina, Arial, Helvetica, sans-serif;
        color: #333;
        font-weight: 200;
    }
    
    .transcriptBtn:hover {
        background-color: lightgray;
        color: white;
    }
    
    .article_title {
        font-family: Escrow Condensed, Georgia, serif;
        font-weight: 700;
        font-size: 30px;
        line-height: 34px;
        color: #333;
    }
    
    h2.article_title {
        margin-top: 0.5em;
        margin-bottom: 0.2em;
    }
    
    .description {
        font-family: Retina, Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #666;
    }
    
    ul {
        list-style-type: none;
        padding-left: 1em;
        padding-right: 1em;
    }
    
    li a {
        color: black;
        text-decoration: none;
    }
    
    li {
        padding-bottom: 0.5em;
    }
    
    hr {
        border-top: 1px solid lightgrey;
    }
    
    
    /* for show page */
    .article_header {
        margin-top: 10vh;
        /* margin-bottom: 4px; */
        font-size: 40px;
        line-height: 1.2em;
        font-family: Escrow Condensed, Chronicle Display, serif;
        font-weight: 700;
    }
    
    .words {
        cursor: pointer;
        margin-bottom: 17px;
        font-size: 17px;
        line-height: 27px;
        word-wrap: break-word;
        font-family: Exchange, Chronicle SSm, serif;
        font-weight: 400;
    }
    
    .words:hover:before {
        content: "▶";
        color: blue;
        opacity: 0.6;
        position: absolute;
        margin-top: -12px;
    }
    
    video {
        background-color: black;
        position: fixed;
        right: 0px;
    }
    
    
    /* Mobile phones */
    
    @media only screen and (max-width: 768px) {
        .article_header {
            width: 100%;
        }
        article {
            width: 100%;
            margin-bottom: 16vh;
        }
        video {
            background-color: black;
            width: 100%;
            height: 15vh;
            bottom: 0px;
        }
    }
    
    
    /* Tablets, Ipads (portrait) */
    
    @media (min-width: 769px) and (max-width: 1024px) {
        .article_header {
            width: 70%;
            padding-left: 5%;
            padding-right: 5%;
        }
        article {
            width: 70%;
            padding-left: 5%;
        }
        video {
            width: 25%;
            top: 0px;
        }
    }
    
    
    /* Laptops, Desktops */
    
    @media (min-width: 1025px) and (max-width: 1280px) {
        .article_header {
            width: 50%;
            padding-left: 25%;
            padding-right: 25%;
        }
        article {
            width: 50%;
            padding-left: 25%;
        }
        video {
            width: 25%;
            top: 0px;
        }
    }
    
    
    /* Desktops */
    
    @media (min-width: 1281px) {
        .article_header {
            width: 50%;
            padding-left: 25%;
            padding-right: 25%;
        }
        article {
            width: 50%;
            padding-left: 25%;
        }
        video {
            width: 25%;
            top: 0px;
        }
    }`} 
    </style>
</head>
<body>
${data}
<script type="text/javascript">
const articleEl = document.querySelector('article');
const videoEl = document.querySelector('video');
const wordsEl = document.querySelectorAll('.words');

videoEl.ontimeupdate = function(e){
  document.querySelectorAll('.words').forEach((word)=>{
    if(word.dataset.start < e.target.currentTime){
      word.classList.add('before')
      word.classList.remove('after')
    }
    else{
      word.classList.remove('before')
      word.classList.add('after')
    }
   })
}
articleEl.onclick = function(e){
  if(e.target.classList.contains('words')){
    videoEl.currentTime = e.target.dataset.start;
    videoEl.play();
  }
}    
</script>
</body>
</html>`;

module.exports = htmlWrapper;