import { Router } from 'express';
import { PageController } from '../controllers/page.controller.js';




const pageController = new PageController();
const router = Router();


router
    .get("/", pageController.minPage)
    .get("/login", pageController.loginPage)
    .get("/register", pageController.registerPage)
    .get("/home", pageController.homePage)
    .get("/profile", pageController.profilePage)

export default router;

