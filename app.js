// dependencies include 4- express, path, bodyParser, nodemailer
const express= require("express");
const path= require("path"); 
const bodyParser= require("body-parser"); 
const nodemailer= require("nodemailer"); 


//create express app and port 
var app= express();
var PORT= 3000; 

//for Jade https://naltatis.github.io/jade-syntax-docs/
// https://html2jade.org/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//to make POST request 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// to use bootstrap from public folder
app.use(express.static(path.join(__dirname, 'public')));


//Routes 
//for jade(html) files in the views folder
//res.render Used in Express to view and send HTML to the client 
app.get('/', function(req, res){
	res.render('index', {title: 'Its Working no Problem!'}) 
}); 

app.get('/about', function(req, res) {
	res.render('about'); 
});

app.get('/contact', function(req, res){
	res.render('contact'); 
}); 

app.get('/chat', function(req, res){
	res.render('chat'); 
}); 


//A post request for NODEMAILER https://nodemailer.com/about/
app.post('/contact/send', function(req, res){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'april11dance@gmail.com',
            pass: 'Dancestar86!!'
        }
    });

    var mailOptions = {
        from: 'April Long <april11dance@gmail.com>',
        to: 'april11dance@yahoo.com',
        subject: 'Website Submission',
        text: 'You have a submission with the following details... Name: '+req.body.name+'Email: '+req.body.email+ 'Message: '+req.body.message,
        html: '<p>You have a submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.redirect('/');
        } else {
            console.log('Message Sent: '+info.response);
            res.redirect('/');
        }
    });
});






//npm i nodemon -g 

// Start server to listen for request

app.listen(PORT, function() {
	console.log("App is running on PORT " + PORT);
}); 
