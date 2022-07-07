import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllStarships } from '../../services/sw-api'

const StarshipsList = () => {
  const [starships, setStarships] = useState([])
  
  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarships()
  }, [])

  return (
    <>
        {starships.map(starship =>
        <div key='starship.index'>
          <Link to='/starship' state={{starship}}>
           {starship.name}
          </Link>
        </div>
        )}
    </>
  )
}

export default StarshipsList