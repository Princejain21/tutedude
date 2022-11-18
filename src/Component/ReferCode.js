import React from 'react'
import refer from '../Asset/refer.png'
export default function ReferCode() {
    return (
        <>

                <div className='row justify-content-between OwnBreadChange'>
                    <div className='col col-md-4 ' style={{paddingLeft:"2rem"}}>
                        <p className='media_message purple'> Your Referral Code</p>
                        <div className='' style={{border:"1.5px solid #DFDFDF", borderRadius:"10px",width:"153px", height:"50px"}} >
                            <img src={refer} className="referImage" alt='...' />
                        </div>

                    </div>
                    <div className='col col-md-4 mt-2'>
                        <div className='referCode'>
                            <p className='screen2_second purple'>Wallet Balance <br /><span className='text-dark'>₹ 500</span></p>
                        </div>
                    </div>

                </div>



        </>
    )
}
