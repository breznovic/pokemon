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

interface Detail {
    id: number
    isOpened: boolean
}

const App: React.FC = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const [viewDetail, setViewDetail] = useState<Detail>({
        id: 0,
        isOpened: false
    })

    useEffect(() => {
        const getPokemon = async () => {
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')
            setNextUrl(res.data.next)
            res.data.results.forEach(async (p: Pokemons) => {
                const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${p.name}`)
                setPokemons((p) => [...p, poke.data])
                setLoading(false)
            })
        }
        getPokemon()
    }, [])

    const nextPage = async () => {
        setLoading(true)
        let res = await axios.get(nextUrl)
        setNextUrl(res.data.next)
        res.data.results.forEach(async (p: Pokemons) => {
            const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${p.name}`)
            setPokemons((p) => [...p, poke.data])
            setLoading(false)
        })
    }

    return <div>
        <div className='container'>
            <header className='pokemonHeader'>Pokemon</header>
            <PokemonCollection pokemons={pokemons}/>
            <div className='btn'>
                <button onClick={nextPage}>{loading ? 'loading...' : 'Load more'}</button>
            </div>
        </div>
    </div>
}

export default App
