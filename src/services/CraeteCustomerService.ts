import prismaClient from "../prisma";

interface CraeteCustomerProps{
    name: string;
    email: string;
}

class CraeteCustomerService{
    async execute({name, email}: CraeteCustomerProps){  
        if(!name || !email){
            throw new Error("Preencha  todos os campos")
        }

        const customer = await prismaClient.customer.create({
            data:{
                name,
                email,
                status: true
            }
        })

        return customer
    }
}

export {CraeteCustomerService}