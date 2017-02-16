/**
 * Created by mengfanxu on 17/2/13.
 */
var events=require('events');
var eventEmitter=new events.EventEmitter();
var connectHandler=function connected() {
    console.log('连接成功');
    eventEmitter.emit('data_received')
};
eventEmitter.on('connect',connectHandler);
eventEmitter.on('data_received',function () {
   console.log('数据接受成功');
});
eventEmitter.emit('connect');
console.log('程序执行完毕');

