//callback
var fs = require("fs");
const superagent = require("superagent");
const data = Math.random().toString(36);

function RandomString(data) {
  console.log(`Random string is :${data}`);
}

superagent.get(`https://robohash.org/${data}`).end((err, res) => {
  if (err) {
    console.log("not able to retive correct breed image", err);
    return;
  }
  console.log(res.request.url);
  fs.writeFile("./RoboImage.txt", res.request.url, (err, res) => {
    if (err) {
      console.log("not able to store the image", err);
      return;
    }
    console.log("Robo Image saved inside file");
  });
});

RandomString(data);
