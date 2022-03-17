const urlInsta = 'https://www.instagram.com/p/CbAmEddtToE/';// insta post url(no stories) without ?utm_medium...
const axios = require('axios')
if (urlInsta.includes("?"))
    urlInsta = urlInsta.slice(0, urlInsta.search("\\?"));
axios.get(`https://api.neoxr.eu.org/api/ig?url=${urlInsta}&apikey=yourkey`).then((res) => {
    if (res.data.data[0].type == "mp4") {
        console.log(res.data.data[0].url);
    } else if (res.data.data[0].type == "jpg") {
        console.log(res.data.data[0].url);
    } else {
      console.log('Error in getting urls');
    }
})
