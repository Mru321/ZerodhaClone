import React from 'react'

function Team() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-5 p-5' style={{alignContent:"center", textAlign:"center"}}>
                    <img src='media\images\nithinKamath.jpg' style={{width:"75%", borderRadius:"50%", marginLeft:"35%", marginTop:"35%"}} />
                    <p className='fs-4 mt-3' style={{marginLeft:"50%"}}>Nithin Kamath</p>
                    <p className='fs-6 text-muted' style={{marginLeft:"50%"}}>Founder, CEO</p>
                </div>
                <div className='col-7 p-5 px-5 mt-4' style={{lineHeight:"1.8", textAlign:"justify"}}>
                    <h1 className='fs-2 mb-3 px-4'>People</h1>
                    <br />
                    <br />
                    <br />
                    <p className='px-4'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p className='px-4'>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p className='px-4'>
                        Playing basketball is his zen.
                    </p>
                    <p className='px-4'>
                        Connect on Homepage / TradingQnA / Twitter
                    </p>
                </div>
            </div>

        </div>
     );
}

export default Team;