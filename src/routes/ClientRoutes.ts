import { createClient, getClient, getAllClient, updateClient, deleteClient } from "../controllers/ClientControllers";
import express from "express"

const router = express.Router();

router.post("/", createClient)

router.get("/:id", getClient)

router.get("/", getAllClient)

router.patch("/:id", updateClient)

router.delete("/:id", deleteClient)


export {
    router as ClientRouter
}