import React from 'react'

import style from './List.module.css'

export default function List (props) {
    const {image, cap, name, symbol, change, price} = props
    
  return (
    <li className={style.listItem}>
       <div>
         <img className={style.listItemImage} src={image} alt='' />
         <span className={style.listItemName}>{name}</span>
       </div>
        <span className={style.listItemSymbol}>{symbol}</span>
        <span className={style.listItemPrice}>{price.toFixed(2)} $</span>
        <span className={style.listItemChange}>{change}</span>
        <span className={style.listItemCap}>{(cap / 1000000).toFixed(0)}</span>
    </li>
  )
}
