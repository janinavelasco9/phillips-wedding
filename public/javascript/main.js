$( document ).ready(function() {
    $(function(){
       $("a").each(function(){
           if ($(this).attr("href") == window.location.pathname){
                   $(this).addClass("active");
           }
       });

       $('.js-mobile-nav').on('click', function(e) {
              e.preventDefault();
              $('.nav').slideToggle();
        });
    });


    app.post('/contact', function (req, res) {
      var mailOpts, smtpTrans;
      //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
      smtpTrans = nodemailer.createTransport('SMTP', {
          service: 'Gmail',
          auth: {
              user: "jvelasco0226@gmail.com",
              pass: "Hobow25!"
          }
      });
      //Mail options
      mailOpts = {
          from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
          to: 'jvelasco0226@gmail.com',
          subject: 'Website contact form',
          text: req.body.message
      };
      smtpTrans.sendMail(mailOpts, function (error, response) {
          //Email not sent
          if (error) {
              res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
          }
          //Yay!! Email sent
          else {
              res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
          }
      });
    });

});
