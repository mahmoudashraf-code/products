import { ObjectId } from "mongodb";
import {
  Column,
  Entity,
  ObjectIdColumn,
} from "typeorm";

export enum inventoryStatus {
  INSTOCK = 'INSTOCK',
  OUTOFSTOCK = 'OUTOFSTOCK',
}

@Entity("products")
export class productsModel {
  @ObjectIdColumn()
  _id: ObjectId

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  description: string;

  @Column()
  banner: string;

  @Column({ array: true })
  images: string[];

  @Column()
  price: number;

  @Column()
  category: string;

  @Column()
  quantity: number;

  @Column()
  rating: number;

  @Column({
    type: "enum",
    enum: inventoryStatus,
    default: inventoryStatus.INSTOCK,
  })
  inventoryStatus: inventoryStatus
}
