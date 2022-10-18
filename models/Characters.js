import mongoose from "mongoose"
const Schema = mongoose.Schema

let Character = new Schema({
  displayName: String,
  description: String,
  developerName: String,
  fullPortrait: String
  
})

export default mongoose.model('characters', Character)

