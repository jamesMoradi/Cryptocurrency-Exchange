import React,{useState} from 'react'
import style from './SearchBox.module.css'

export default function SearchBox() {
    const [value, setValue] = useState('')

    const changeHandler = e => {
        const inputValue = e.target.value
        setValue(inputValue)
    }

    return (
    <div>
        <input placeholder='search...' className={style.input} onChange={changeHandler} value={value}/>
    </div>
  )
}
