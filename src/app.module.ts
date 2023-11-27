import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { RazorpayModule } from 'nestjs-razorpay';
import { RazorpayModule as paymentService} from './razorpay/razorpay.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RazorpayModule.forRoot({
      key_id: process.env.Razor_Api_Key ?? '',
      key_secret: process.env.Razor_Api_Secret ?? '',
    }),

    //  postgres
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username:  process.env.Postgres_Username ??'',
      password: process.env.Postgres_Password ??'',
      entities: [User],
      database: 'postgres',
      synchronize: true,
    }),
    UserModule,
    // mongo db
    MongooseModule.forRoot(process.env.MONGODB_URL ?? ''),
    ProductsModule,
    paymentService,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
