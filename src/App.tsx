import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
import PokemonCollection from "./components/PokemonCollection";

interface Pokemons {
    name: string
    url: string
}

export interface Pokemon {
    id: number
    name: string
    sprites: {
        front_default: string
    }
}

const App: React.FC = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        const getPokemon = async () => {
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')
            res.data.results.forEach(async (pokemon: Pokemons) => {
                const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                setPokemons((p) => [...p, poke.data])
            })
        }
        getPokemon()
    }, [])

    return <div>
        <div className='container'>
            <header className='pokemonHeader'>Pokemon</header>
            <PokemonCollection pokemons={pokemons}/>
        </div>
    </div>
}

export default App
