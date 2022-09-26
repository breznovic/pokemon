import React, {useEffect, useState} from 'react'
import './Pokemon.css'
import {Detail} from '../App'

interface Props {
    abilities: {
        name: string
        ability: string
    }[] | undefined
    name: string
    id: number
    image: string
    viewDetail: Detail
    setViewDetail: React.Dispatch<React.SetStateAction<Detail>>
}

const PokemonList: React.FC<Props> = (props) => {

    const {name, id, image, abilities, viewDetail, setViewDetail} = props
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        setIsSelected(id === viewDetail?.id)
    }, [viewDetail])

    const closeDetail = () => {
        setViewDetail({
            id:0,
            isOpened: false
        })
    }

    return <div className=''>
        {isSelected ? (
            <section className='pokemonListDetailed'>
                <div className='detailContainer'>
                    <p className='detailClose' onClick={closeDetail}>X</p>
                    <div className='detailInfo'>
                        <img src={image} alt='pokemon' className='detailImg'/>
                        <p className='detailName'>{name}</p>
                    </div>
                    <div className='detailSkill'>
                        <p className='detailAbility'>Abilities: </p>
                        {abilities?.map((a: any) => {
                            return <div>
                                {a.ability.name}
                            </div>
                        })}
                    </div>
                </div>
            </section>
        ) : (
            <section className='pokemonListContainer'>
                <p className='pokemonName'>{name}</p>
                <img src={image} alt='pokemon'/>
            </section>)}
    </div>
}

export default PokemonList
