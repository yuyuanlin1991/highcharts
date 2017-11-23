/**
 * Created by yuyuanlin on 2017/11/23.
 */
var express = require('express');
var ejs = require("ejs");
var path = require("path");
var app = express();
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'public'));
//前端可见的文件夹
app.use(express.static(path.join(__dirname, 'public')));

app.get('\^/*', function (req, res) {
    res.render("./public/index.html");
});

var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});