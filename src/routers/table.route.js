import controller from '../controllers/table.controller.js';


export class TableRouter{
    static router(fastify,options){
        fastify.post("/:table",controller.create)
            .get("/:table",controller.getAll)
            .get("/:table/:id",controller.getById)
            .patch("/:table/:id",controller.update)
            .delete("/:table/:id",controller.delete)
    }
}