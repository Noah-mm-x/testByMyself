/**
 * Created by mengfanxu on 17/2/13.
 */
var fs=require('fs');
fs.readFile('index.txt',function (err,data) {
   if(err) console.log(err);
   console.log(data.toString());
});