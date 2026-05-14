import React from 'react';

function OpenAccount() {
    return (
         <div className='container p-5 '>
            <div className='row text-center'>
                <h1 className='fs-6 text-muted'> Open a Zerodha account </h1>

                <p className='text-muted' style={{fontSize:"12px"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intradry and F&O trades. </p>

                <button className=' btn btn-primary btn-sm ' style={{width:"15%", margin:"0 auto",backgroundColor:"rgb(14, 149, 245)"}}>
                    Sign up Now
                </button>
            </div>
        </div>
      );
}

export default OpenAccount;