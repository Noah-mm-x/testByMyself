'use strict';
var fs = require('fs');
var request = require('request-promise');
var writeStream = fs.createWriteStream('index.json');
// 获取数据条数
var num = 100
new Promise((resolve, reject) => {
	var arr = [];
	var url;
	for(let i=1;i<num;i++){
		url = 'http://mnks.jxedt.com/get_question?r=0.14942907941122408&index='+i;
		request(url).then((data)=>{
			arr.push(data);
		}).then((result)=>{
		    if(i==(num-1)) resolve(arr);
		})
	}
}).then((result)=>{
	writeStream.write(result.toString(),'UTF8');
	writeStream.on('finish',()=>{
		console.log('写入完成');
	});
	writeStream.on('error',()=>{
		console.log('写入错误');
	});
	writeStream.end();
});