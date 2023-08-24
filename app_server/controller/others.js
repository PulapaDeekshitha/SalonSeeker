/* GET 'about' page */
module.exports.about = function(req, res){
    res.render('generic-text', { title: 'About' });
    content: 'SalonSeeker is the application designed to simplify the process of finding and accessing nearby salons and beauty services. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
  
  };
  /* GET 'signin' page */
  module.exports.signin = function(req, res){
    res.render('signin', { title: 'signin' });
    content: 'SalonSeeker is the application designed to simplify the process of finding and accessing nearby salons and beauty services. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
  }
  /* GET 'register' page */
  module.exports.register = function(req, res){
    res.render('register', { title: 'register' });
    content: 'SalonSeeker is the application designed to simplify the process of finding and accessing nearby salons and beauty services. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
  }
  