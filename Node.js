const path = require('path')

const os = require('os')

const fs = require('fs')

const emmiter = require('events')  //class

const emObj = new emmiter()  //object



const Logger = require('./NewFile')
const logger = new Logger()

logger.on('messageLogged',(args) => {
    console.log('I am in', args)
})

logger.log('message')