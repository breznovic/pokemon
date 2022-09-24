import React, {useRef, useState} from 'react'
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

type MultipleSelectProps = {
    multiple: true
    value: SelectOption[]
    onChange: (value: SelectOption[]) => void
}

export function Select({value, onChange, options}: SelectProps) {

    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    function isOptionSelected(option: SelectOption) {
        return multiple ? value.includes(option) : option === value
    }

    return <div className='container'>
        <span className='value'>Value</span>
        <button className='clear-btn'>&times;</button>
        <div className='divider'></div>
        <div className='caret'></div>
        <ul className='options'>
            {options.map((option, index) => (
                <li
                    onClick={e => {
                        e.stopPropagation()
                        selectOption(option)
                        setIsOpen(false)
                    }}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    key={option.value}
                    className={`$option} ${
                        isOptionSelected(option) ? selected : ""} ${index === highlightedIndex ? highlighted : ""}`}
                >
                    {option.label}
                </li>
            ))}
        </ul>
    </div>
}