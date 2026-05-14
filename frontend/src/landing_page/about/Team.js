import React from 'react';

function Team() {
    return (  
        <div className='container px-5'>
            <div className='row '>
               <h1 className='text-center mt-5 fs-5 opc'>People</h1>
            </div>
            <div className='row '>
                <div className='col-6 text-center p-5'>
                    <img src='media/images/nithinKamath.jpg' alt='Nithin kamath' style={{borderRadius:"100%", width:"60%"}} />
                    <h4 className='font-lg opc mt-2'>Nithin Kamath</h4>
                    <h5 className='font text-muted mt-3'>Founder, CEO</h5>
                </div>
                <div className='col-6 font-lg mt-5'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a href='/' style={{textDecoration:"none"}}>Homepage</a> / <a href='/' style={{textDecoration:"none"}}>TradingQnA</a> / <a href='/' style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;