export default function sortCharactersByHealth(characters) {
  characters.sort((a, b) => b.health - a.health);
  return characters;
}
