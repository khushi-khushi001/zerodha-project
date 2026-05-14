import React from 'react';

function Universe() {
    return ( 
        <div className='container  px-5'>
            <div className='row text-center p-5'>
                <h1 className='fs-5 opc mt-5'>The Zerodha Universe</h1>
                <p className='font-lg text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
               
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/zerodhaFundhouse.png" alt='img' style={{width:"55%"}}/>
                    <p className='font text-muted mt-3'>Our asset management venture<br/>
                               that is creating simple and transparent index<br/>
                            funds to help you save for your goals.

                    </p>
                </div>
                 <div className='col-4 p-3 mt-5'>
                    <img src="media/images/sensibullLogo.svg" alt='img' style={{width:"70%"}}/>
                    <p className='font text-muted mt-3'>Options trading platform that lets you  <br/>
                        create strategies, analyze positions, and examine<br/>
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                 <div className='col-4 p-3 mt-5'>
                    <img src="media/images/goldenpiLogo.png" alt='img' style={{width:"60%"}}/>
                    <p className='font text-muted mt-3'>Investment research platform <br/>
                        that offers detailed insights on stocks, <br/>
                        sectors, supply chains, and more.
                    </p>
                </div>
                 <div className='col-4 p-3 '>
                    <img src="media/images/streakLogo.png" alt='img' style={{width:"50%"}}/>
                    <p className='font text-muted mt-3'>Systematic trading platform <br/>
                        that allows you to create and backtest <br/>
                        strategies without coding.
                    </p>
                </div>
                 <div className='col-4 p-3'>
                    <img src="media/images/smallcaseLogo.png" alt='img' style={{width:"60%"}}/>
                    <p className='font text-muted mt-3'>Thematic investing platform <br/>
                      that helps you i     nvest in diversified <br/>
                       baskets of stocks on ETFs.
                    </p>
                </div>
                 <div className='col-4 p-3 '>
                    <img src="media/images/dittoLogo.png" alt='img' style={{width:"40%"}}/>
                    <p className='font text-muted mt-3'>Personalized advice on life <br/>
                        and health insurance. No spam <br/>
                        and no mis-selling.
                        
                    </p>
                </div>
                <button className=' btn btn-primary btn-sm ' style={{width:"17%", margin:"0 auto",backgroundColor:"rgb(14, 149, 245)"}}>
                    Sign up for free
                </button>
            </div>
        </div>
     );
}

export default Universe;