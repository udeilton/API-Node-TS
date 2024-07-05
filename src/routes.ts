import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { request } from "http";
import { CraeteCustomerController } from "./controllers/CraeteCustomerController";
import {ListCustomersController} from './controllers/ListCustomersController';
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function rooutes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/teste", async(request:FastifyRequest, reply:FastifyReply) => {
        return {ok: true}
    } )

    fastify.post("/customer", async (request: FastifyRequest, reply:FastifyReply) =>{
        return new  CraeteCustomerController().handle(request, reply)
    })

    fastify.get("/customers", async (request: FastifyRequest, reply:FastifyReply) =>{
        return new  ListCustomersController().handle(request, reply)
    })

    fastify.delete("/customer", async (request: FastifyRequest, reply:FastifyReply) =>{
        return new  DeleteCustomerController().handle(request, reply)
    })

}