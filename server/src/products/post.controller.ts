import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { productsModel } from './post.model';
import { ObjectId } from 'mongodb';

@Controller()
export class ProductsController {
  constructor(
    @InjectRepository(productsModel)
    public productsRepository: Repository<productsModel>,
  ) { }

  @Get()
  getList() {
    return this.productsRepository.find()
  }

  @Get(":id")
  getItem(@Param("id") id: ObjectId) {
    const objectId = new ObjectId(id);
    return this.productsRepository.findOneBy({ _id: objectId })
  }

  @Post()
  AddNewProduct(@Body() item: productsModel) {
    if (item._id) {
      item._id = new ObjectId(item._id)
    }
    return this.productsRepository.save({
      ...item
    })
  }

  @Put(":id")
  updateProduct(@Body() item: productsModel, @Param("id") id: ObjectId) {
    return this.productsRepository.save({
      ...item,
      _id: id,
    })
  }

  @Delete(":id")
  deleteItem(@Param("id") id: ObjectId) {
    const objectId = new ObjectId(id);
    return this.productsRepository.delete({
      _id: objectId
    })
  }
}
