import { DataSource } from "typeorm"

// Entity
import { Client } from "./entities/Client"
import { Product } from "./entities/Product"
import { Commande } from "./entities/Commande"
import { Image } from "./entities/Image"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "type_orm",
    synchronize: true,
    logging: true,
    entities: [Client, Product, Commande, Image],
    subscribers: [],
    migrations: [],
    socketPath: "/opt/lampp/var/mysql/mysql.sock"
})
