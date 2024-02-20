import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PokemonDetails from './pages/PokemonDetails'
import Error from './pages/Error'

function App() {

  return (
    <>

      <Navbar /> 

      <div className='app-container'>

        <Sidebar />

        <div className='page'>
          <Routes>

            <Route path={"/"} element={ <Home />}/>
            <Route path={"/details/:pokemonName"} element={ <PokemonDetails /> }/>

            {/* error handling routes */}

            {/* error de servidor, usualmente se redirreciona desde los catch */}
            <Route path={"/error"} element={ <Error />}/>

            {/* errores de usuario, cuando navega a paginas que existen */}
            <Route path={"*"} element={ <NotFound />}/>

          </Routes>
        </div>
      
      </div>  

    </>
  )
}

export default App
