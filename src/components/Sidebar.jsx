import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


// fetch
// URL de la API
// En que momento debemos hacer la llamada
  // React nos pide que al hacer llamadas externas, siempre las hagamos en el ciclo de vida de ComponentDidMount
// Creamos un estado para almacenar la data que viene externa

function Sidebar() {

  const [ allPokemon, setAllPokemon ] = useState(null) // no tenemos la data al unicio del componente

  useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => {
      return response.json() // segunda promesa (solo aplica al usar fetch)
    })
    .then((response) => {
      console.log(response.results)
      setAllPokemon(response.results)
    })
    .catch((error) => {
      console.log(error)
    })

  }, [])

  // gestion de efectos de espera (Loading)
  if (allPokemon === null) {
    return <h3>...buscando pokemons</h3>
  }

  return (
    <nav className="sidebar">

      {allPokemon.map((eachPokemon) => {
        return (
          <Link to={`/details/${eachPokemon.name}`} key={eachPokemon.name}>{eachPokemon.name}</Link>
        )
      })}

    </nav>
  )
}

export default Sidebar