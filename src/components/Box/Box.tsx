import React, {MouseEventHandler} from 'react'
import './Box.css'

type PropsType = {
    value: string
    onClick: MouseEventHandler<HTMLButtonElement> | undefined
}

const Box = (props: PropsType) => {

    const style = props.value === 'X' ? 'box x' : 'box o'

    return (
        <button className={style} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Box
