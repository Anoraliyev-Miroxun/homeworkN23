import {Router} from 'express';
import booksController from '../controllers/books.controller.js';


const router=Router();

router
    .post("/",booksController.createBook)
    .get("/",booksController.getBook)
    .get("/nechta",booksController.getBookMualif) // 1-shart
    .get("/janr",booksController.getBookJanr) // 2-shart
    .get("/ortacha",booksController.getBookAvgPrice)  // 4- shart
    .get("/:id",booksController.getByIdBook)
    .patch("/:id",booksController.patchBook)
    .delete("/:id",booksController.deleteBook)


export default router;

