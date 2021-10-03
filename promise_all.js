var fs = require("fs");
var superagent = require("superagent");

// Function to generate random string

// declare all characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function randomString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


//Promise.all
function writeFilePromise(fileLocation, result) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileLocation, result, (err) => {
            if (err) {
                reject('not able to write to the file')
            }
            resolve()
        })
    })
}
async function getRandomPic() {
    try {
        const res1 = await superagent.get(`https://robohash.org/${randomString(6)}`)
        console.log('Random image is ', res1.request.url)
        const res2 = await superagent.get(`https://robohash.org/${randomString(6)}`)
        console.log('Random image is ', res2.request.url)
        const res3 = await superagent.get(`https://robohash.org/${randomString(6)}`)
        console.log('Random image is ', res3.request.url)

        const all = await Promise.all([res1, res2, res3])
        const images = all.map((el) => el.request.url)
        console.log(images);
        await writeFilePromise('./RoboImage.txt', images.join("\n"))
        console.log('sucessfully written the file')
    } catch (err) {
        throw err
    }
  
}

    ; (async () => {
        try {
            await getRandomPic()
        } catch (err) {
            console.log(err)
        }
    })()