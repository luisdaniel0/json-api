import connection from "../db/connection.js"
import Characters from "../models/Characters"
import characters from "../seed/characters.json" assert {type: 'json'}

const insertData = async () => {
  //reset database
  await connection.dropDatabase();


  //insert data
  await Characters.create(characters)


  //close db connection
  await connection.close();
};

insertData();
