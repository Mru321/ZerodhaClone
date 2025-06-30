import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5 mb-5 mt-3'>
            <div className='row text-center'>
                <h1 className='mt-5 mb-3'>Zerodha Products</h1>
                <p className='fs-5'>Sleek, modern, and intuitive trading platforms.</p>
                <p className='mb-5 mt-3' style={{margin:"0 auto", paddingBottom:"5%"}}>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
                <hr className='text-muted' />
            </div>

        </div>
     );
}

export default Hero;