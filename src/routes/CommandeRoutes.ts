import { createCommande, getCommande, getAllCommande, updateCommande, deleteCommande } from "../controllers/CommandeControllers";
import express from "express"

const router = express.Router();

router.post("/", createCommande)

router.get("/:id", getCommande)

router.get("/", getAllCommande)

router.patch("/:id", updateCommande)

router.delete("/:id", deleteCommande)

export {
    router as CommandeRouter
}