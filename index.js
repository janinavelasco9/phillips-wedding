var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/our-wedding', function(request, response) {
  response.render('pages/our-wedding');
});

app.get('/photographs', function(request, response) {
  response.render('pages/photographs');
});

app.get('/details', function(request, response) {
  response.render('pages/details');
});

app.get('/thank-you', function(request, response) {
  response.render('pages/thank-you');
});

app.get('/rsvp', function(request, response) {
  response.render('pages/rsvp');
});

app.post('/shower-rsvp', function(req, res) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'jvelasco0226@gmail.com', // Your email id
            pass: 'Hobow25!' // Your password
        }
    });

    var text = req.body.firstName + ' ' + req.body.lastName + ' answered ' + req.body.attending +  ' to attending the shower ';

    var mailOptions = {
        from: 'jvelasco0226@gmail.com', // sender address
        to: 'jvelasco0226@gmail.com', // list of receivers
        subject: 'Shower RSVP', // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.redirect('/thank-you');
        };
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
