// dependencies include 4- express, path, bodyParser, nodemailer






//create express app and port 






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










//A post request for NODEMAILER https://nodemailer.com/about/









// Start server to listen for request
