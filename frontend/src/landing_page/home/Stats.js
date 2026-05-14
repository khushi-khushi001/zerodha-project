import React from 'react';

function Stats() {
    return ( 
        <div className='container px-5'>
            <div className='row '>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-5 '>Customer-first always</h2>
                    <p className='text-muted' style={{fontSize: "12px"}}>That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crore worth of equity investments.</p>

                    <h2 className='fs-5'>No spam or gimmicks</h2>
                    <p className='text-muted' style={{fontSize: "12px"}}>No gimmecks, spam, "gamification", or annoying push notifications.
                        High quality apps that you use at your pace, the way you like.
                    </p>

                    <h2 className='fs-5'>The Zerodha universe</h2>
                    <p className='text-muted' style={{fontSize: "12px"}}>Not just an app, but a whole ecosystem. Our investment in 30+ fintech startups offer
                        you tailored services specific to your needs.
                    </p>

                    <h2 className='fs-5'>Do better with money</h2>
                    <p className='text-muted' style={{fontSize: "12px"}}>With initiatives like Nudge and Kill Switch, we don't just faciliate transactions, 
                        but help you do better eith your money.
                    </p>


                    
                </div>
                <div className='col-6 mt-4'>
                    <img src='media/images/ecosystem.png' alt='ecosystem' style={{width:"100%"}} />
                    <div className='text-center'>
                        <a href='/' className='mx-5' style={{textDecoration:"none"}}>Explore our products<i class="fa-solid fa-arrow-right-long"></i></a> &nbsp;
                        &nbsp;
                        <a href=' /' style={{textDecoration:"none"}}>Try Kite demo<i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;