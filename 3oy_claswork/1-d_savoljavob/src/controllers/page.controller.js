export class PageController{
    /**
   * index.ejs faylini render qiluvchi method
   *
   * Methd ---> GET
   * URL   ---> /
   * @param {*} req
   * @param {*} res
   */

    minPage(req,res){
        res.render("index")
    };


    /**
   * Login sahifani render qiluvchi method
   *
   * Method ---> GET
   * URL    ---> /login
   * @param {*} req
   * @param {*} res
   */

    loginPage(req,res){
        console.log(req.body?.query)
        res.render("pages/login")
    };


    /**
   * Register sahifani render qiluvchi method
   *
   * Method ---> GET
   * URL    ---> /register
   * @param {*} req
   * @param {*} res
   */

    registerPage(req,res){
        res.render("pages/register")
    };


    /**
   * Todo sahifani render qiluvchi method
   *
   * Method ---> GET
   * URL    ---> /home
   * @param {*} req
   * @param {*} res
   */


    homePage(req,res){
        console.log(req.query)
        res.render("pages/todo")
    };

    profilePage(req,res){
        res.render("pages/profile")
    }







}