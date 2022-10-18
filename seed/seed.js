import mongoose from "mongoose"
import connection from "../db/connection.js"
import Character from "../models/Characters"
import data from './characters.json' assert { type: 'json'}

let characterData = data.map(item => {
  const character = {}
  character.displayName = item.displayName
  character.description = item.description
  character.developerName = item.developerName
  character.fullPortrait = item.fullPortrait
  return character
})

Character
  .deleteMany({})
  .then(() => Character.create(characterData))
  .then(() => console.log("Done!"))
  .then(mongoose.disconnect())
  .catch(error => console.log("Error", error))
