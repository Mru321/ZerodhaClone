import React from 'react'

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1>Unbeatable pricing</h1>
                    <p className='mt-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-6 border p-3'>
                            <h1><i class="fa fa-inr" aria-hidden="true"></i>0</h1>
                            <p>Free equity delivery and direct mutual funds
                            </p>
                        </div>
                        <div className='col-6 border p-3'>
                            <h1><i class="fa fa-inr" aria-hidden="true"></i>20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;