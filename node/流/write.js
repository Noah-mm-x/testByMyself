/**
 * Created by mengfanxu on 17/2/13.
 */
var fs = require('fs');
var data = '12345';
var writeStream = fs.createWriteStream('index.txt');
writeStream.write(data, 'UTF8');
writeStream.end();

writeStream.on('finish', function () {
    console.log('写入完成');
});

writeStream.on('error', function (err) {
    console.log(err);
});

console.log('执行完毕');