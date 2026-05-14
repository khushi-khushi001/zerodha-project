import React from 'react';

function RightSection({
    imageUrl,
    productName,
    productDescription,
    learnMore,

}) {
    return (  
        <div className='container  px-5'>
            <div className='row'>
                
                <div className='col-6 mt-5 p-5'>
                    <h1 className='fs-5 opc mt-5'>{productName}</h1>
                    <p className='font-lg text-muted'>{productDescription}</p>

                    <div className='font-lg'>
                        <a href={learnMore}>Kite Connect <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                   
                </div>
                <div className='col-6 p-3 '>
                    <img src={imageUrl} alt='img' style={{width:"100%"}}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;