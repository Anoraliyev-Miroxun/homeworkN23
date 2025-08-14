import Fastify from 'fastify';
import {TableRouter} from './routers/table.route.js';

const fastify=Fastify({
    logger:false
});

fastify.register(TableRouter.router,{prefix:"/market"})

export class Application{
    static async start(){
        try {
            await fastify.listen({port:7777})
            console.log("server shu portda ishlayapti",7777)
        } catch (error) {
            fastify.log.error(error)
            process.exit(1)
        }
    }
}
