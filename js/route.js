module.exports = function(app, passport){

	app.get('/', function(req, res){
		res.render('login.ejs', { message_type:"success" ,message: "" }); 
	});



}