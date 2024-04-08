import { uploadImage } from "../controllers/ImageController";
import express from "express"

const router = express.Router();

router.post("/", uploadImage)

export {
    router as ImageRouter
}
