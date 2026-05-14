import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center'>
                <div className='col-8 p-4'>
                    <a href='/' style={{textDecoration:"none"}}><h3 className='fs-5'>Brokerage calculator</h3> </a>
                      <ul className='font-lg text-muted mt-4' style={{textAlign:"left", lineHeight:"2.4"}} >
                        <li>Flat Rs. 20 per executed order</li>
                        <li>0.15% of the intrinsic value on options that are bought and exercised</li>
                        <li>0.15% on sell side (on premium)</li>
                        <li>NSE: 0.03553% (on premium)BSE: 0.0325% (on premium)</li>
                        <li>18% on (brokerage + SEBI charges + transaction charges)</li>
                        <li>0.003% or ₹300 / crore on buy side</li>
                      </ul>
                </div>
                <div className='col-4'>
                    <a href='/' style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;