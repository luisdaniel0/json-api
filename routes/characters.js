import { Router } from "express";
import * as controllers from "../controllers/characters.js";

const router = Router();

router.get("/valorant", controllers.getCharacters)
router.get("/valorant/:id", controllers.getCharacter)
router.post("/valorant", controllers.createCharacter)
router.put("/valorant/:id", controllers.updateCharacter)
router.delete("/valorant/:id", controllers.deleteCharacter)

export default router;