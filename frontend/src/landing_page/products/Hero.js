import React from 'react';

function Hero() {
    return ( 
       <div className='container border-bottom p-3'  >
         <div className='pt-5 text-center  mb-5'>
             <h1 className='fs-4 opc'>Zerodha Products</h1>
              <h3 className='fs-6 text-muted mt-2' >Sleek, modern, and intuitive trading platforms</h3>
             <p className='font-lg mt-3'>Check out our <a href=' /' style={{textDecoration:"none"}}>investment offering 
             <i class="fa-solid fa-arrow-right-long"></i></a></p>
          </div> 
       </div> 
    );
}

export default Hero;