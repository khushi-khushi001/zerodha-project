import React from 'react';

function Hero() {
    return ( 
        <div className='container  p-2'>
            <div className='row d-flex justify-content-center mt-4 text-center'>
                <img src='media/images/homeHero.png' alt='Hero' className='mb-5' style={{width:"65%"}}/>

                <h1 className='fs-4 text-muted'> Invest in everything </h1>

                <p style={{fontSize:"15px"}}>Online platform to invest in stocks, derivatives, mutual funds, and more</p>

                <button className=' btn btn-primary btn-sm' style={{width:"15%", margin:"0 auto", backgroundColor:"rgb(14, 149, 245)"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;