import mongoose from "mongoose"
import connection from "../db/connection.js"
import Character from "../models/Characters.js"
import characterJsonData from './characters.json' assert { type: 'json'}

let characterData = characterJsonData.data.map(item => {
  const character = {}
  character.displayName = item.displayName
  character.description = item.description
  character.developerName = item.developerName
  character.fullPortrait = item.fullPortrait
  return character
})

async function insertData() {
  await db.dropDatabase();
  await Character.create(characterData)
  console.log(`you have inserted ${characterData.length} Characters into the database!`)

  mongoose.disconnect();
}

insertData();
