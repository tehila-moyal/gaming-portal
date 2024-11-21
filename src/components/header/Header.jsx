import React from 'react'
import './Header.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



export default function Header({title}) {
  return (
    <h1 className='display-1 text-primary text-center'  >{title}</h1>


  )
}

