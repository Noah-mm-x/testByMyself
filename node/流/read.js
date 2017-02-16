/**
 * Created by mengfanxu on 17/2/13.
 */
var fs = require('fs');
var data = '';

var readStream = fs.createReadStream('index.txt');
readStream.setEncoding('UTF8');

readStream.on('data', function (chunk) {
    data += chunk;
});

readStream.on('end', function () {
    console.log(data);
});

readStream.on('error', function (err) {
    console.log(err);
});

console.log('执行完毕');