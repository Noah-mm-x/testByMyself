/**
 * Created by mengfanxu on 17/5/2.
 */
module.exports = {
    devtool:'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
        path:__dirname + "/public",
        filename:"bundle.js"
    },
    devServer:{
        contentBase:'./public', //设置本地服务器页面的目录
        colors:true, //终端输出结果为彩色
        historyApiFallback:true, //不跳转
        inline:true //实时刷新
    }
}