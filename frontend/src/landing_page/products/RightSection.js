import React from 'react'

function RightSection({
    imageUrl,
    productName,
    productDescription,
    learnMore
}) {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
            
                <div className='col-5 p-5 mt-4' style={{textAlign:"justify", lineHeight:"1.8"}}>
                    <h1 className='fs-2 mb-3 px-3' style={{paddingTop:"30%"}}>{productName}</h1>
                    <p className='mb-3 px-3'>{productDescription}</p>
                    <div className='row px-3'>
                        <a href={learnMore} style={{textDecoration:"none" }}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                
                </div>

                <div className='col-7 p-5'>
                    <img src={imageUrl} style={{width:"95%"}}/>
                </div>
            </div>

        </div>
     );
}

export default RightSection;