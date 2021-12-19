import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import planetLoader from "../images/planet-loader.svg";


const Planetload = () => {

  
    const[loading, setLoading] = useState(true);
    const[planets, setplanets] = useState(null);


    useEffect(() =>{
        setTimeout( () => {
            setLoading(false);
            setplanets(!null);
        },2000);
    }, [])
    

    return (
        <div className='container-fluid'>
        {    loading  &&  <div className='container'>
                <div className='heading container py-5'>
                    <h1 className='fw-bold'>Spacious</h1>
                </div>
                <div className='img-container text-center pt-5 pb-5 m-auto'>
                    <img src={planetLoader} className='img-fluid  bg-white py-5 px-3 border-radius ' alt='planetloader'></img>
                </div>
            </div>
        }

        {
            planets && <Redirect to="/Planets" />
        }

        </div>
    )
}

export default Planetload;
