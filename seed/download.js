import fetch from "node-fetch"
const url = "https://valorant-api.com/v1/agents";
import { promises as fsPromises } from 'fs'


fetch(url)
  .then(response => response.json())
  .then(data => fsPromises.writeFile("./characters.json", JSON.stringify(data)))
  .catch(error => console.error(error))

  
