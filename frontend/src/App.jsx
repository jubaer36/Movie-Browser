import './css/App.css';
import Favourites from './pages/Favourites';
import Home from "./pages/Home"
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { MovieProvider } from "./context/MovieContext"

function App() {
  return (

    <MovieProvider>
      <NavBar />

      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>

  )
}

export default App;
