import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

//Importaremos un decorador nuevo que se llama @InjectModel
import { InjectModel } from '@nestjs/mongoose';
//Importamos el model de mongoose
import { Model } from 'mongoose';
//Importamos el User y el userSchema: 
import { User, usersSchema, UsersDocument } from './schema/users.schema';

@Injectable()
export class UsersService {

  //Creamos el constructor: hacemos la inyección del nombre del modelo del usuario
  constructor(@InjectModel(User.name) private userModel: Model<UsersDocument>) {}; 

  create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }

  findAll() {
    return this.userModel.find();
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise <User | null> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string): Promise<User | null> {
    return await this.userModel.findByIdAndDelete(id);
  }
}
