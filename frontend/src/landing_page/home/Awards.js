import React from 'react';

function Awards() {
    return (  
        <div className='container px-5  '>
            <div className='row align-items-center' >
                <div className='col-6 mt-5 '>
                    <img src='media/images/largestBroker.svg' alt='large broker' className='img-fluid w-100 ' />
                </div>
                <div className='col-6 p-5 mt-5 '>
                    <h1 className='fs-2'>Largest stock broker in India</h1>
                    <p className='mb-3' style={{fontSize:"13px"}}>2+ million Zerodha clients contribute to over 15% of all
                        retail order volumes in India by trading and investing in: </p>
                    <div className='row '>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p style={{fontSize:"13px"}}>Futures and Options</p>
                                </li>
                                 <li>
                                    <p style={{fontSize:"13px"}}>Commodity derivates</p>
                                </li>
                                 <li>
                                    <p style={{fontSize:"13px"}}>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p style={{fontSize:"13px"}}>Stocks & IPOs</p>
                                </li>
                                 <li>
                                    <p style={{fontSize:"13px"}}>Direct mutual funds</p>
                                </li>
                                 <li>
                                    <p style={{fontSize:"13px"}}>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                         <img src='media/images/pressLogos.png' alt='press logo' className='img-fluid' style={{width:"100%"}}/>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default Awards;