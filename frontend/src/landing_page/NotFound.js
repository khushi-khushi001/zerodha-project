import React from 'react';

function NotFound() {
    return (
         <div className='container p-5 '>
            <div className='row text-center'>
                <h1 className='fs-6 text-muted'> 404 Not Found </h1>

                <p className='text-muted' style={{fontSize:"12px"}}>
                    Sorry, the page you are looking for does not exist.
                 </p>

            </div>
        </div>
      );
}

export default NotFound;