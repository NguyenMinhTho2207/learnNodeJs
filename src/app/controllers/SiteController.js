const Course = require('../models/Course')

class SiteController {
  index(req, res) {
    res.json({
      name:'text',
      a:'text',
    })

    // res.render('home');
  }
  //[GET] /news

  show(req, res) {
    res.render('erroRoute');
  }
}

module.exports = new SiteController();
