import React,{useEffect, useState} from 'react'
import List from './List'

import style from './SearchBox.module.css'

import { getUsdData } from './Api'

export default function SearchBox() {
    const [value, setValue] = useState('')
    const [cryptoes, setCryptoes] = useState([])

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await getUsdData()
        
        setCryptoes(data)
    }

    const changeHandler = e => {
        const inputValue = e.target.value
        setValue(inputValue)
    }

    return (
    <div>
        <input placeholder='search...' className={style.input} onChange={changeHandler} value={value}/>
        <div>
            <ul>
                {cryptoes.map(each => <List 
                key={each.id}
                image={each.image}
                cap={each.market_cap}
                name={each.name}
                symbol={each.symbol}
                change={each.ath_change_percentage}
                
                />)}
            </ul>
        </div>
    </div>
  )
}
