import express from "express";
import connection from "./db/connection.js"
import routes from "./routes/index.js"
import cors from "cors"
import logger from "morgan"
import chalk from "chalk"


const port = process.env.PORT || 3000
const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/", routes);

connection.on("connected", () => {
  console.clear();
  console.log(chalk.blue("connected to mongoDB"));
  app.listen(port, () => {
    console.log(`express server is running! ${port}`)
  })
})