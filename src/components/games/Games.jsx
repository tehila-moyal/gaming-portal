import React from 'react'
import { Route,Routes } from 'react-router-dom';

import './Games.scss'
import { Link } from 'react-router-dom';


export default function Games({list,btnText}) {

  return (
    <div>
      {list.map(({name,link,explanation,backgroundImg},index)=>{
        return <div className="card mt-5 mb-3  container p-3  col-10  text-center games" key={index} style={{widt: '18rem',backgroundImage: `url('${backgroundImg}')`, color:'white'}}>
        <div className="card-body">
          <h4 className="card-title ">{name}</h4>
          <p className="card-text">{explanation}</p>
          <Link to={link}><button className="testbtn2">{btnText}</button></Link>
        </div>
      </div>
      })}
    </div>
  )
}
