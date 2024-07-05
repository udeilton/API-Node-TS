    import { FastifyRequest, FastifyReply } from 'fastify';
    import { ListCustomersService } from '../services/ListCustomersService'

    class ListCustomersController{
        async handle(request: FastifyRequest, reply: FastifyReply){
            const listCustomersService = new ListCustomersService();

            const customers = await listCustomersService.excute();

            reply.send(customers);
        }

    }

    export { ListCustomersController }