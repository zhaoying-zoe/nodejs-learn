const express = require('express')
const app = express()
const port = 3000
const index = require('./router/index')

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options') {
        res.send(200);  //让options尝试请求快速结束
    } else {
        next();
    }
});


app.use('/', index)

/*  
    如果中间件中没有执行next()方法
    该请求就会被挂起,前端的请求会显示pending状态
*/
// 万能匹配()
// app.use(() => {
//     console.log(2222)
// })

app.listen(port, () => {
    console.log(`server is running at ${port}`)
})