import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

//Voy a importar la entidad Users: 
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  users: Array<User>;

  constructor() {
    this.users = [];
  }

  // create(createUserDto: CreateUserDto) {
  //   return 'Aca estamos creando un alto user';
  // }


  create(createUserDto: CreateUserDto) {
    const nuevoUsuario : User = {
      id: this.generarIdUico(),
      first_name: createUserDto.first_name, 
      last_name: createUserDto.last_name,
      email: createUserDto.email,
      password: createUserDto.password, 
    };
    this.users.push(nuevoUsuario); 
    return nuevoUsuario;
  }


  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private generarIdUico(): number{
    return Math.floor(Math.random() * 1000); 
  }
}
