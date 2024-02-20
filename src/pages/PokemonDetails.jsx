import { useEffect, useState } from "react"

import { useParams, useNavigate } from "react-router-dom"

import DotLoader from "react-spinners/DotLoader";

function PokemonDetails() {

  const params = useParams()
  console.log(params)

  const navigate = useNavigate() // nos retorna una funcion para redireccionar

  // 1. Crear el estado que almacenará la data
  const [ details, setDetails ] = useState(null)

  // 2. Buscamos la data de la API en el componentDidMount
  useEffect(() => {

    // 3. Usamos el fetch para acceder a la API
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log(response)
      // setTimeout(() => {
        setDetails(response)
      // }, 1500)
    })
    .catch((error) => {
      console.log(error)
      // vamos a redirijir al usuario a "/error"
      navigate("/error") // le damos como valor, el nuevo URL a redirijir
    })

    // al agregar dependencias, funciona como componentDidMount y tambien como componentDidUpdate en cambios de params.pokemonName
  }, [params.pokemonName])

  // 4. gestion loading
  if (details === null) {
    // return <h3>... buscando detalles de Pokemon</h3>
    return (
      <div style={{display: "flex", justifyContent: "center"}}>
        <DotLoader color={"red"} size={100}/>
      </div>
    )
  }

  return (
    <div>
      
      {/* 5. Renderizar la data externa */}

      <h2>Nombre: {details.name}</h2>
      <p>Height: {details.height}</p>
      <p>Weight: {details.weight}</p>
      <img src={details.sprites.front_default} alt="poke-img" width="150px"/>
      <img src={details.sprites.other.dream_world.front_default} alt="poke-img" width="150px"/>

    </div>
  )
}

export default PokemonDetails