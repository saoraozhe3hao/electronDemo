/**
 * Created by hong on 2016/4/17.
 */
console.log('index.js');

// js 中可以使用node 模块
var fs = require('fs');

fs.writeFileSync('debug/message.txt', 'This is my first Electron app!', 'utf8');