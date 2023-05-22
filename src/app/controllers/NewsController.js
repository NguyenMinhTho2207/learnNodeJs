class NewsController{
    
    index(req,res){
        res.render('home')
    }
    //[GET] /news

    news(req, res) {
          res.render('news')
       
      }
    show(req,res){
        res.render('erroRoute')
    }
}


module.exports = new NewsController  