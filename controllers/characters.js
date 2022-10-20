import Character from "../models/Characters.js"

const getCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message });
  }
};

export const getCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const house = await Character.findById(id)

    if (house) {
      return res.json(character)
    }

    res.status(404).json({ message: "character not found!" })
  } catch (error) {
    
  }
};

export const createCharacter = async (req, res) => {
  try {
    const character = new Character(req.body)
    await character.save();
    res.status(201).json(house);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Character.findByIdAndUpdate(id, req.body);
    res.status(201).json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteCharacter = async (req, res) => {
  try {
    const { id }= req.params;
    const deleted = await Character.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("character deleted")
    }
    throw new Error("Character not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}