import React from 'react'

function Stats() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-5'>
                    <h1 className='mb-4'>Trust with confidence</h1>

                    <h2 className='p-1 fs-3'>Customer-first always</h2>
                    <p className='p-1 text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h2 className='p-1 fs-3'>No spam or gimmicks</h2>
                    <p className='p-1 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                    <h2 className='p-1 fs-3'>The Zerodha universe</h2>
                    <p className='p-1 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='p-1 fs-3'>Do better with money</h2>
                    <p className='p-1 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7'>
                    <img src='media\images\ecosystem.png' style={{width:"95%"}} />
                    <div className='text-center p-3'>
                        <a href='' className='m-5' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' className='m-5' style={{textDecoration:"none"}}>Try kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;