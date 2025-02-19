import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

//Importamos: 
import { MongooseModule } from '@nestjs/mongoose';

//Para trabajar con el middleware: 
import MiMiddleware from './middleware/miMiddleware';

//Trabajamos con Variables de Entorno: 
//Instalamos: npm install @nestjs/config
//Importamos ConfigModule, ConfigService.
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [UsersModule, ConfigModule.forRoot(), MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async(config:ConfigService) => ({
      uri: config.get<string>("MONGO_URL")
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MiMiddleware).forRoutes({path: "*", method: RequestMethod.ALL})
  }
}

//"mongodb+srv://coderhouse63425:coderhouse@cluster0.91yld.mongodb.net/Nest?retryWrites=true&w=majority&appName=Cluster0"
