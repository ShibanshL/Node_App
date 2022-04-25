const path = require('path')

const os = require('os')

const fs = require('fs')

const emmiter = require('events')  //class

const emObj = new emmiter()  //object

emObj.on('messageLogged',()=>{
    console.log('I am in')
})

emObj.emit('messageLogged')