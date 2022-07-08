import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { getDetails } from "../../services/sw-api";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const handleClick = () => {
    let path = '/'
    navigate(path)
  }

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
      {starshipDetails.name ?
        <>
          <h2>name: {starshipDetails.name}</h2>
          <h2>model: {starshipDetails.model}</h2>
          <button type='submit' onClick={handleClick}>Return</button>
        </>
        :
        <h3>Loading starship details</h3>
      }
    </>
  )
}

export default StarshipDetails