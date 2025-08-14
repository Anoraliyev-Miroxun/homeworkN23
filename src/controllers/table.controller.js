import UnversalService from '../services/table.service.js';

class UnversalController {
    async create(req, reply) {
        const table = req.params.table;
        const data = await UnversalService.create(req.body, table);
        console.log(data);
        return reply.code(201).send({
            statusCode: 201,
            message: "success",
            data
        })

    }


    async getAll(req, reply) {
        const data = await UnversalService.getAll(req.params.table);
        return reply.code(200).send({
            statusCode: 200,
            message: "success",
            data
        })
    }


    async getById(req, reply) {
        const data = await UnversalService.getById(req.params.id, req.params.table);
        return reply.code(200).send({
            statusCode: 200,
            message: "success",
            data
        })
    }


    async update(req, reply) {
        const data=await UnversalService.update(req.body,req.params.id,req.params.table);
        return reply.code(200).send({
            statusCode: 200,
            message: "success",
            data
        })
    }


    async delete(req, reply) {
        const data=await UnversalService.delete(req.params.table,req.params.id);
        return reply.code(200).send({
            statusCode:200,
            message:"success",
            data:{}
        })
    }
}

export default new UnversalController();
