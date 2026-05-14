import React from 'react';

function Education() {
    return ( 
        <div className='container mt-2 p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' alt='education' className='img-fluid' style={{width:"80%"}}/>
                </div>
                 <div className='col-6'>
                    <h1 className='fs-2 mb-3'>Free and open market education</h1>
                    <p style={{fontSize: "15px"}}>Varsity, the largest online stock market education book in the world 
                        covering evrything from the basics to advaced treding.
                    </p>
                    <a href='/' style={{textDecoration:"none", fontSize:"14px"}}>Versity <i class="fa-solid fa-arrow-right-long"></i></a>

                    <p style={{fontSize: "15px"}} className='mt-3'>TradingQ&A, the most active trading and investment community in
                        India for all your market related queries.
                    </p>
                    <a href='/' style={{textDecoration:"none", fontSize:"14px"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                 </div>
            </div>
        </div>
     );
}

export default Education;