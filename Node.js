// const path = require('path')

const os = require('os')

// var pathObj = path.parse(__filename)

var osObj = os.freemem()
var osObj1 = os.totalmem()
var osObj2 = os.platform()
var osObj3 = os.uptime()

console.log('Obj = ',osObj)
console.log('Obj1 = ',osObj1)
console.log('Obj2 = ',osObj2)
console.log('Obj3 = ',osObj3)
// console.log('Obj = ',osObj)

// console.log(pathObj)