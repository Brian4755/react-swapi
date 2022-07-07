import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';
import Starships from './pages/Starships/Starships';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Starships />} />
        <Route path='/Starship' element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
