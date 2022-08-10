import React from 'react'

import style from './Loader.module.css'

export default function Loader(props) {
  return (
    <div className={style.loaderContainer} style={{display : props.isEmpty.length !== 0 && 'none'}}>
        <span className={style.loader}></span>
    </div>
  )
}
