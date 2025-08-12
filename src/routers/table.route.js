import Router from "@koa/router";
import controller from '../controllers/tables.controller.js';

const router = new Router({ prefix: '/user' });

router
    .post('/:table', controller.create)
    .get('/:table', controller.findAll)
    .get('/:table/:id', controller.findById)
    .patch('/:table/:id', controller.update)
    .delete('/:table/:id', controller.delete)

export default router;