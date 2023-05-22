class SiteController{
    
    index(req,res){
        res.render('home')
    }
    //[GET] /news


    show(req,res){
        res.render('erroRoute')
    }
}


module.exports = new SiteController  