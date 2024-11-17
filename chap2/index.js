// const fs = require('fs');
// import fs from 'fs' // runs only when type is set to module
import parseArgs from 'minimist';
import  Timer from 'tiny-timer';
// grabbing flags from process argv returns an array 
/*
[
  '/Users/neeraj/.nvm/versions/node/v20.12.0/bin/node',
  '/Users/neeraj/lab/node_essentials/chap1/process',
  '--user',
  'neeraj',
  '--age',
  '22',
  '--lname',
  'Vishwakarma'
]*/
// whereas minimist parseags returns an process object 
/*

{
  _: [
    '/Users/neeraj/.nvm/versions/node/v20.12.0/bin/node',
    '/Users/neeraj/lab/node_essentials/part2/website/chap2/index.js'
  ],
  time: 2
}

*/

const obj = parseArgs(process.argv)
// console.log(obj)
const  { time } = obj;
if (!time) {
  throw new Error('--time is required')
}
if (!parseInt(time)) {
  throw new Error('--time is number')

}

console.log(time)
const timer = new Timer();

timer.on('tick', (ms) => console.log('tick', ms))
timer.on('done', () => console.log('done!'))
timer.on('statusChanged', (status) => console.log('status:', status))

timer.start(time * 1000);