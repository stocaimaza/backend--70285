import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

//Importamos MongooseModule: 
import { MongooseModule } from "@nestjs/mongoose"; 
//Importamos el User y el userSchema: 
import { User, usersSchema } from './schema/users.schema';

//VARIABLES DE ENTORNO: me traigo el ConfigModule
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forFeature([{
    name: User.name, 
    schema: usersSchema
  }]), ConfigModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
