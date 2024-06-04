import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ProductsModule } from './products/products.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: "mongodb",
      host: "localhost",
      port: 27017,
      database: "products",
      entities: [join(__dirname, '**', '*.model.js')],
    }),
    RouterModule.register([
      {
        path: 'products',
        module: ProductsModule
      }
    ])
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
