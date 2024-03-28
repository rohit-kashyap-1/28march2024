import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Country() {
  const [country,setCountry] = useState({})
  const name  = useParams()
  useEffect(function(){
    
    fetch('https://restcountries.com/v3.1/name/'+name.name).then((response)=>response.json()).then((data)=>{
      
      setCountry(data[0])
    })
  },[country])
  return (
    <div>
      <h1>{country.name.common}</h1>
      
    </div>
  )
}
