import { Entity, BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm"
import { Commande } from "./Commande"

@Entity('client')
export class Client extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({
        unique: true
    })
    email: string

    @CreateDateColumn()
    birthdate: Date

    @Column()
    single: boolean

    @Column()
    telephone: number

    @Column()
    password: string

    @OneToMany(
        () => Commande, (commande) => commande.client
    )
    @JoinColumn()
    commandes: Commande

}