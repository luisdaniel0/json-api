import { Router } from "express"
import characterRoutes from "../routes/characters.js"

const router = Router();

router.get('/', (req, res) => res.send("this is the API root"));

router.use("/characters", characterRoutes);

export default router;
