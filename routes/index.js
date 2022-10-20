import { Router, router } from "express"
import characterRoutes from "./characters.js"

const router = Router();

router.get('/', (req, res) => res.send("this is the API root"));

router.use("/characters", characterRoutes);