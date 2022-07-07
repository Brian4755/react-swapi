const baseURL = 'https://swapi.dev/api/'

export function getAllStarships() {
  const res = await fetch(`${baseURL}/starships/`)
  return res.json
}