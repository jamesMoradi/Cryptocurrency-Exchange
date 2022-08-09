import React from 'react'

export default function List (props) {

    const {image, cap, name, symbol, change} = props

  return (
    <li>
        <img src={image} alt='' />
        <span>{name}</span>
        <span>{symbol}</span>
        <span>{change}</span>
        <span>{cap}</span>
    </li>
  )
}
