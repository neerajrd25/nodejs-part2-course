const https = require('https');
const fs = require('fs');

const url = 'https://www.ndtv.com/topic/news-feed';

const request = https.get(url, (res) => {

  let download = fs.createWriteStream('index.html');
  console.log('Response started');
  res.pipe(download);
  res.on('end', () => {
    console.log('response finished')
  })
});


request.end();