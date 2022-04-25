const emmiter = require('events')  //class
const emObj = new emmiter()  //object

var link = 'https://myinfo.io/'

console.log(__filename)
console.log(__dirname)

function log(message){
    console.log(message)
    // console.log(module)

    emObj.emit('messageLogged',{id:1, url:'http://'})

}



module.exports = log
