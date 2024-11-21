import axios from 'axios'

let baseURL='http://localhost:3052/';

export const getData= async(endPoint)=>{
    try{

        let response= await axios.get(`${baseURL}${endPoint}`)
        console.log(response.data);
        return {status:true,data:response.data}
    }catch(err){
        console.log(err);
        return {status:false,data:err}

    }
}

import React, {useState } from 'react'

export default function Cuisines() {

    const [cusine,setCusine]=useState([])

    async function hendelThis() {
      let res= await getData('cuisine')
      if(res.status){
        setCusine(res.data)
      }else{
        console.log(res.data);
      }
    }


  return (
    <div>
        <button onClick={hendelThis}>get cusine</button>
        <ul>
          {cusine.length>0&&cusine.map((el,inx)=>{
            return <li key={inx}>{inx+1}: {el.name}</li>
          })}
        </ul>
    </div>
    )
}