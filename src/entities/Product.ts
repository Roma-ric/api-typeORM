import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('product')
export class Product extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique: true
    })
    name: string

    @Column()
    description: string

    @Column()
    price: number

    @Column()
    popular: boolean

    @Column()
    in_promotion: number
}