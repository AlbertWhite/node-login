var nodemailer = require('nodemailer');

//smtp setting for email
var smtpConfig = {
//in the office 365 mail settings, the host is smtp.office365.com, but it is not working	
    host: 'outlook-emeawest.office365.com',
    port: 587,
    auth: {
        user: 'albert.yuebai@pilotfish.eu',
        pass: ''//write your password here
    }
};

module.exports = {
	transporter :nodemailer.createTransport(smtpConfig)
}