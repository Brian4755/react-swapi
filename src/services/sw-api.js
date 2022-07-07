const baseURL = 'https://swapi.dev'

export async function getAllStarships() {
  const res = await fetch(`${baseURL}/api/starships`)
  return res.json()
}

export async function getDetails(apiURL) {
  const res = await fetch(`${apiURL}`)
  console.log(res)
  return res.json()
}