import { Entity, BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { Client } from "./Client"

@Entity('commande')
export class Commande extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    totalPrice: number

    @CreateDateColumn()
    dateOfCommande: Date

    @ManyToOne(
        () => Client, (client) => client.commandes
    )
    @JoinColumn()
    client: Client

}