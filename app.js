// dependencies include 4- express, path, body-parser, nodemailer



//create express app and port 


//for Jade https://naltatis.github.io/jade-syntax-docs/
// https://html2jade.org/
//Set the view engine as jade
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



//A post request for NODEMAILER https://nodemailer.com/about/








// Start server to listen for request













//npm i nodemon -g 