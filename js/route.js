module.exports = function(app, passport){

	app.get('/', function(req, res){
		res.render('login.ejs', { message_type:"danger" ,message: req.flash("loginMessage") }); 
	});

	app.get('/login', function(req, res){
		res.render('login.ejs', { message_type:"danger" ,message: req.flash("loginMessage") }); 
	});	

	app.get('/index', function(req, res){
		res.render('index.ejs'); 
	});	

	app.get('/signup', function(req, res){
		res.render('signup.ejs', { message_type:"danger" ,message:req.flash("signupMessage") }); 
	});	

	app.post('/login', passport.authenticate('login', {//use the method created in passport.js
		successRedirect : '/index', 
		failureRedirect : '/login', 
		failureFlash : true
	}));

	app.post('/signup', passport.authenticate('signup', {//use the method created in passport.js
        successRedirect : '/', 
        failureRedirect : '/signup', 
        failureFlash : true 
    }));	


}