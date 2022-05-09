import React from 'react';
import './Country.css'
const Country = (props) => {
const {area,population,name,flags}=props.country;
    return (
        <div className='country'>
          <h1>Country Name:{name.common}</h1> 
          <img src={flags.png} alt="" />
          <h4>population:{population}</h4> 
          <p><small>Area:{area}</small></p>

        </div>
    );
};

export default Country;