import React from 'react'
import {Pokemon} from '../App'

interface Props {
    pokemons: Pokemon[]
}

const PokemonCollection: React.FC<Props> = (props) => {

    const {pokemons} = props

    return <div>
        <section className='collectionContainer'>
            {pokemons.map((p) => {
                    return <div className=''>
                        {p.name}
                    </div>
                }
            )}
        </section>
    </div>
}

export default PokemonCollection
