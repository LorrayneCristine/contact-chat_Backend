import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/Users";
import { UsersRepository } from "../repositories/UsersRepository"
import { ConnectionsService } from "../services/ConnectionsService"



class UsersService {

    private usersRepository: Repository <User> 
    constructor(){
        this.usersRepository = getCustomRepository ( UsersRepository )
    }


    async create (email: string){
        //verificar se o usuario exite 

        const userExists = await this.usersRepository.findOne({
            email,
        })

        //se existir retornar usuario
        if(userExists){
            return userExists;
        }

        const user = this.usersRepository.create({
            email,
        });

        await this.usersRepository.save(user);
        //se não existir, salvar no bd

        return user;
    }

    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({
          email,
        });
        return user;
    }
    
}

export { UsersService }