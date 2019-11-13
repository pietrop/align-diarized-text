const htmlWrapper = (data, styles) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Interactive Podcast</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Interactive Podcast">
  <meta name="Test" content="Test">
  <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css" 
    integrity="sha256-piqEf7Ap7CMps8krDQsSOTZgF+MU/0MPyPW2enj5I40=" 
    crossorigin="anonymous" />
    <style>
      ${styles}
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