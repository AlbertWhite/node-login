### Login, Signup, Find Password with NodeJS


#### Intro
Branch "1-login" is only for login, signup without sending email to verify.

Branch "master" contains all the functions.

#### Before we run

Before we run, we need to add your own mongodb's url in js/config/database.js and add own email SMTP configuration information in js/config/mailer.js

#### How to run




Install the dependencies

	npm install

set up the server
	
	node server.js

Open localhost:3000


#### Dependencies
- ExpressJS
- Passport.js
- NodeMailer.js
- Mongoose.js
