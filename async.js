var fs = require('fs');
const superagent = require('superagent');

const data = Math.random().toString(36).substring(2, 7);

function RandomString(data) {
    console.log(`Random string is :${data}`);
}
function writeFilePromise(filelocation, data){
    return new Promise((resolve, reject) =>{ 
        fs.writeFile(filelocation,data,(err)=>{
            if(err){
                reject("not able to write content in file");
            }
            resolve(data);
        });
    });
}

async function robohash(){
    try{
        RandomString(data)
        const res = await superagent.get(`https://robohash.org/${data}`);
        console.log(res.request.url);
        writeFilePromise("./RoboImage.txt",res.request.url)
        console.log("image saved successfully!")
    }catch(err){
        console.log(err);
    }
}

robohash()