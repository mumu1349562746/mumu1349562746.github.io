var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(80,function(){
	console.log('server is running')
});
app.get('/pic',function(req,res){
	res.send('hello node')
})
app.get('/getusername',function(req,res){
	var name = req.query.username;
	var password = req.query.password;
	var str = '我是'+name;
	res.send(str);
})
app.get('/checkuser',function(req,res){
	var username = req.query.username;
	var password = req.query.password;
	if(username === 'abc'&& password === '123'){
		res.send('登陆成功');
	}else{
		res.send('登陆失败');
	}
})