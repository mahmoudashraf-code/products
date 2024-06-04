import { Module } from '@nestjs/common';
import { ProductsController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productsModel } from './post.model';

@Module({
    imports: [TypeOrmModule.forFeature([productsModel])],
    controllers: [ProductsController],
    providers: [],
})
export class ProductsModule {}
