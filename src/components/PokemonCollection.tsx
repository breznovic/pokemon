import React from 'react'
import {Pokemon} from '../App'
import PokemonList from './PokemonList'
import './Pokemon.css'

interface Props {
    pokemons: Pokemon[]
}

const PokemonCollection: React.FC<Props> = (props) => {

    const {pokemons} = props

    return <div>
        <section className='collectionContainer'>
            {pokemons.map((p) => {
                    return <div className=''>
                        <PokemonList
                            key={p.id}
                            name={p.name}
                            id={p.id}
                            image={p.sprites.front_default}
                        />
                    </div>
                }
            )}
        </section>
    </div>
}

export default PokemonCollection
