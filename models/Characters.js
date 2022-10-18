import mongoose from "mongoose"
const Schema = mongoose.Schema

let Character = new Schema({
  displayName: { type: String },
  description: { type: String },
  developerName: { type: String },
  fullPortrait: { type: String },

})

export default mongoose.model('characters', Character)

