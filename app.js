// dependencies include 4- express, path, bodyParser, nodemailer






//create express app and port 






//for Jade 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//to make POST request 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));



//Routes 
//for jade(html) files in the views folder










//A post request for NODEMAILER 









// Start server to listen for request
