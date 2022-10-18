import data from './characters.json' assert { type: 'json'}

let characterData = data.map(item => {
  const character = {}
  character.displayName = item.displayName
  character.description = item.description
  character.developerName = item.developerName
  character.fullPotrait = character.fullPotrait
  return character
})

console.log(characterData);