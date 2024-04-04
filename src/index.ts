import "reflect-metadata"
import { AppDataSource } from "./data-source"

// Express
import express from "express";
const app = express();

// Router
import { ClientRouter } from "./routes/ClientRoutes"
import { CommandeRouter } from "./routes/CommandeRoutes"
import { ProductRouter } from "./routes/ProductRoutes"

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")

        app.use(express.json());

        // Endpoints start
        app.get("/", (req, res) => {
            res.json("Building API with typeORM");
        });
        app.use("/clients", ClientRouter);
        app.use("/commmandes", CommandeRouter);
        app.use("/products", ProductRouter);
        // Endpoints end

        app.listen(3011, () => {
            console.log("App is listening on port " + 3011)
        })

    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })