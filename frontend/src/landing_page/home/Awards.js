import React from 'react'
function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' />
                </div>
                <div className='col-6 p-5 mt-4'>
                    <h1 className='fs-2 mb-3'>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li className='p-1'>Futures and Options</li>
                                <li className='p-1'>Futures and Options</li>
                                <li className='p-1'>Futures and Options</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li className='p-1'>Futures and Options</li>
                                <li className='p-1'>Futures and Options</li>
                                <li className='p-1'>Futures and Options</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media\images\pressLogos.png' style={{width: "90%"}}/>
                
                </div>
            </div>

        </div>
     );
}

export default Awards;