const emmiter = require('events')  //class
// const emObj = new emmiter()  //object

var link = 'https://myinfo.io/'

// console.log(__filename)
// console.log(__dirname)
class Logger extends emmiter{
    log(message){
        console.log(message)
        // console.log(module)
    
        this.emit('messageLogged',{id:1, url:'http://'})
    
    }
}






module.exports = Logger
