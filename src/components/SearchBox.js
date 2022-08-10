import React,{useEffect, useState} from 'react'
import List from './List'

import style from './SearchBox.module.css'

import { getUsdData } from './Api'
import Loader from './Loader'

export default function SearchBox() {
    const [value, setValue] = useState('')
    const [cryptoes, setCryptoes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsdData()
            if (value === '') {
                setCryptoes(data)
                console.log(cryptoes);
            } else {
                const filtered = data.filter(each => each.id.includes(value))
                setCryptoes(filtered)
                console.log(cryptoes);
            }
        }
        fetchData()
    })


    const changeHandler = e => {
        const inputElem = e.target.value
        setValue(inputElem)
    }

    return (
    <div>
        <input placeholder='search...' className={style.input} onChange={changeHandler} value={value}/>        
        <Loader isEmpty={cryptoes}/>
        <div>
            <ul className={style.cryptoesList}>
                {cryptoes.map(each => <List 
                key={each.id}
                image={each.image}
                cap={each.market_cap}
                name={each.name}
                symbol={each.symbol}
                change={each.ath_change_percentage}
                price={each.current_price}
                />)}
            </ul>
        </div>
    </div>
  )
}
