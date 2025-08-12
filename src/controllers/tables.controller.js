import tableModel from '../services/table.service.js';

class TableController {
    async create(ctx) {
        const { table } = ctx.params;
        const data = ctx.request.body;

        const newRecord = await tableModel.create(data, table);
        ctx.status = 201;
        ctx.body = newRecord;
    }

    async findAll(ctx) {
        const  table  = ctx.params.table;
        const records = await tableModel.findAll(table);
        ctx.status = 200;
        ctx.body = records;
    }

    async findById(ctx) {
        const { id, table } = ctx.params;
        const record = await tableModel.findById(id, table);
        if (!record) {
            ctx.throw(404, `${table} record not found`);
        }
        ctx.status = 200;
        ctx.body = record;
    }

    async update(ctx) {
        const { id, table } = ctx.params;
        const data = ctx.request.body;
        const updatedRecord = await tableModel.update(id, data, table);
        if (!updatedRecord) {
            ctx.throw(404, `${table} record not found`);
        }
        ctx.status = 200;
        ctx.body = updatedRecord;
    }

    async delete(ctx) {
        const { id, table } = ctx.params;
        const deleted = await tableModel.delete(id, table);
        if (!deleted) {
            ctx.throw(404, `${table} record not found`);
        }
        ctx.status = 200;
        ctx.body = {};
    }
}

export default new TableController();