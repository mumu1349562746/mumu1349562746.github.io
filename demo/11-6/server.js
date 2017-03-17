var express = require('express');
var app = express();
app.use(express.static('public'))

app.get('/getdata',function(req,res){
	var fruitlist =  ['香蕉','苹果','鸭梨','桃子'];
	res.send(fruitlist);
})
app.get ('/fruitlist',function(req,res){
	var fruitlist =  ['香蕉','苹果','鸭梨','桃子'];
	res.send(fruitlist);
})

app.listen(80,function(){
	console.log('server is running')
})