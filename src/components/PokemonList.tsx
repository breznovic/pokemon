import React from 'react'
import './Pokemon.css'

interface Props {
    name: string
    id: number
    image: string
}

const PokemonList: React.FC<Props> = (props) => {

    const {name, id, image} = props

    return <div className=''>
        <section className='pokemonListContainer'>
            <p className='pokemonName'>{name}</p>
            <img src={image} alt='pokemon'/>
        </section>
        </div>
}

export default PokemonList