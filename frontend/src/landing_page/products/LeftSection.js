import React from 'react'

function LeftSection({
    imageUrl,
    productName,
    productDescription,
    tryDemo, 
    learnMore,
    googlePlay,
    appleStore

}) {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-7 p-5'>
                    <img src={imageUrl} style={{width:"95%"}}/>
                </div>
                <div className='col-5 p-5 mt-4' style={{textAlign:"justify", lineHeight:"1.8"}}>
                    <h1 className='fs-2 mb-3 px-3'>{productName}</h1>
                    <p className='mb-3 px-3'>{productDescription}</p>
                    <div className='row px-3'>
                        <div className='col-6'>
                            <div className='row mb-3'>
                                <a href={tryDemo} style={{textDecoration:"none" }}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            </div>
                            <div className='row'>
                                <a href={googlePlay}>
                                    <img src='media\images\googlePlayBadge.svg' />
                                </a>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='row mb-3'>
                                <a href={learnMore} style={{textDecoration:"none" }}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            </div>
                            <div className='row'>
                                <a href={appleStore}>
                                    <img src='media\images\appstoreBadge.svg' />
                                </a>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>

        </div>
     );
}

export default LeftSection;