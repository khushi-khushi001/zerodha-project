import React from 'react';

function LeftSection({imageURL, productName,  productDescription, tryDemo, learnMore,  googlePlay, appStore}) {
    return (  
        <div className='container  px-5'>
            <div className='row px-5'>
                <div className='col-6 p-5 '>
                    <img src={imageURL} alt='img' style={{width:"110%"}}/>
                </div>
                <div className='col-6 mt-5 p-5'>
                    <h1 className='fs-5 opc'>{productName}</h1>
                    <p className='font-lg text-muted'>{productDescription}</p>

                    <div className='font-lg'>
                        <a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a> &nbsp; &nbsp;
                        <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                   <div className=' mt-3'>
                     <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' alt='play store' style={{width:"25%"}}/> </a>
                    <a href={appStore}><img src='media/images/appStoreBadge.svg' alt='app store' style={{width:"25%"}}/> </a>

                   </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
