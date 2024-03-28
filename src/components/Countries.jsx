import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Countries() {
    let [countries, setCountries] = useState([])

    useEffect(function(){
        fetch('https://restcountries.com/v3.1/all?fields=name,flags,continents,region').then((response) => response.json()).then((data) => {
            setCountries(data)
        })
    },[])
    return (
        <div>
            <h1>Participating Countries</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi suscipit deleniti, aut maiores maxime recusandae nihil? Cum vel quas dolor debitis asperiores nisi neque reprehenderit dolore iure, rem ab placeat?</p>

            <div className='row'>
                {countries.map((item) => {
                    return <div className='col-md-3 mb-3'>
                    <Link to={'/countries/'+item.name.official}>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={item.flags.png} className='img-fluid mb-2' style={{width:'100px',height:'60px',objectFit:'contain'}} />
                                <h6 className='mb-0'>{item.name.official}</h6>
                            </div>
                        </div>
                    </Link>
                </div>
                })}
            </div>


        </div>
    )
}
