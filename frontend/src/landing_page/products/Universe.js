import React from 'react'

function Universe() {
    return ( 
        <div className='container p-5 mb-5 mt-5'>
            <div className='row text-center'>
                <h1 className='mt-5 mb-4'>The Zerodha Universe</h1>
                <p className='fs-5 mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='row'>
                    <div className='col-4 p-3'>
                        <img src='media\images\zerodhaFundhouse.png' style={{width:"70%"}} />
                        <p className='p-3 text-muted' style={{textAlign:"center", fontSize:"90%"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    </div>
                    <div className='col-4 p-3'>
                        <img src='media\images\sensibullLogo.svg' style={{width:"70%"}} />
                        <p className='p-3 mt-4 text-muted' style={{textAlign:"center", fontSize:"90%"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </div>
                    <div className='col-4 p-3'>
                        <img src='media\images\tijori.svg' style={{width:"70%"}} />
                        <p className='p-3 text-muted' style={{textAlign:"center", fontSize:"90%"}}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4 p-3'>
                        <img src='media\images\streakLogo.png' style={{width:"70%"}} />
                        <p className='p-3 text-muted' style={{textAlign:"center", fontSize:"90%"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                    </div>
                    <div className='col-4 p-3'>
                        <img src='media\images\smallcaseLogo.png' style={{width:"70%"}} />
                        <p className='p-3 mt-3 text-muted' style={{textAlign:"center", fontSize:"90%"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                    </div>
                    <div className='col-4 p-3'>
                        <img src='media/images/dittoLogo.png' style={{width:"70%"}} />
                        <p className='p-3 text-muted' style={{textAlign:"center", fontSize:"90%"}}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                    </div>
                </div>
            </div>
            <div className='row' style={{alignItems:"center"}}>
            <button className='p-2 btn btn-primary fs-5 mb-5 mt-4' style={{width:"20%", margin:"0 auto"}}>Signup for free</button>
            </div>
        </div>
     );
}

export default Universe;