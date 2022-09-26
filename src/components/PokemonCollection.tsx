import React from 'react'
import {Detail, PokemonDetail} from '../App'
import PokemonList from './PokemonList'
import './Pokemon.css'

interface Props {
    pokemons: PokemonDetail[]
    viewDetail: Detail
    setViewDetail: React.Dispatch<React.SetStateAction<Detail>>
}

const PokemonCollection: React.FC<Props> = (props) => {

    const {pokemons, viewDetail, setViewDetail} = props

    const selectPokemon = (id: number) => {
        if (!viewDetail.isOpened) {
            setViewDetail({
                id: id,
                isOpened: true
            })
        }
    }

    return <>
        <section className={viewDetail.isOpened ? 'collectionContainerActive' : 'collectionContainer'}>
            {viewDetail.isOpened ? (
                <div className='overlay'></div>
            ) : (
                <div></div>
            )}
            {pokemons.map((p) => {
                    return <div onClick={() => selectPokemon(p.id)}>
                        <PokemonList
                            key={p.id}
                            name={p.name}
                            id={p.id}
                            image={p.sprites.front_default}
                            abilities={p.abilities}
                            viewDetail={viewDetail}
                            setViewDetail={setViewDetail}
                        />
                    </div>
                }
            )}
        </section>
    </>
}

export default PokemonCollection
