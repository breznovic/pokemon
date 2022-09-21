import React from 'react'
import './Select.css'

type SelectOption = {
    label: string
    value: string
}

type SelectProps = {
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void
    options: SelectOption[]
}

export function Select({value, onChange, options}: SelectProps) {
    return <div className='container'>
        <span className='value'>Value</span>
        <button className='clear-btn'>&times;</button>
        <div className='divider'></div>
        <div className='caret'></div>
        <ul className='options'></ul>
    </div>
}