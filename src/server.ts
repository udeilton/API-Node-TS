import Fastify from "fastify";
import cors from '@fastify/cors';
import { rooutes } from "./routes";

const app = Fastify ({logger: true})

const start = async () => {
    
    await app.register(cors);
    await app.register(rooutes);

    try{
        await app.listen({port:3333})
    }catch(err){
        process.exit(1)
    }
}

start();

