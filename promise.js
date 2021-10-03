var fs = require('fs');
const superagent = require('superagent');

const data = Math.random().toString(36).substring(2, 7);


function writeFilePromise(filelocation, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filelocation, data, (err) => {
            if (err) {
                reject("not able to write content in file");
            }
            resolve(data);
        });
    });
}


function RandomString(data) {
    console.log(`Random string is :${data}`);
}
superagent.get(`https://robohash.org/${data}`)
.end((err,res)=>{
	console.log(res.request.url)
	return writeFilePromise("./RoboImage.txt",res.request.url)

.then(()=>{
	console.log('sucessfully written contents inside the file')
})
.catch((err)=>{
	console.log(err)
})
})

RandomString(data)