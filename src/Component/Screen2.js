import React from 'react'
import '../App.css'
import refer from '../Asset/refer.png'
import Screen2Next from './Screen2Next'
import Vector from '../Asset/Vector.png'
import card from '../Asset/card.png'
import key from '../Asset/key.png'
import rup from '../Asset/rup.png'
import sun from '../Asset/sun.png'



export default function Screen2() {
    return (
        <>
            <div className='row justify-content-between OwnBreadChange '>
                <div className='col screen2 col-md-5 '>
                    <div className='row   p-2'>
                        <div className='col col-sm-6 col-md-4 text-center '>
                            <p className='purple screen2_second  '>Refferal Earning </p>
                            <p style={{ fontSize: "32px" }}>₹ 2,500</p>
                        </div>
                        <div className='col col-sm-6 col-md-4 text-center  '>
                            <p className='purple screen2_second'>Total Refferals </p>
                            <p style={{ fontSize: "32px" }}>₹ 7</p>
                        </div>
                        <div className=' col col-sm-6 col-md-4 text-center '>
                            <p className='purple screen2_second'>Wallet Balance </p>
                            <p style={{ fontSize: "32px" }}>₹ 500</p>
                        </div>
                        <div className='col col-sm-6 col-md-12  mx-auto d-flex justify-content-center'>
                            <button className='btn bgpurple text-white screen2_btn '>Withdraw Balance</button>
                        </div>
                    </div>
                </div>
                <div className='col col-md-5'>
                    <p className='media_title purple'> Your Referral Code</p>
                    <div className='card_border' style={{ textAlign: 'center', width: "358px", height: "50px" }} >
                        <img src={refer} className="referImage" alt='...' />
                    </div>
                </div>
            </div>
            <div className='OwnBreadChange mt-5'>
                <p className='purple media_title'>How does it works ?</p><br />
                <div className='row'>
                    <Screen2Next source={Vector} heading="Invite your friends" message="
                    Share the link tutedude.com withyour friendsz
                    " />
                    <Screen2Next source={key} heading="Friend purchases any course" message="
                    Using your REFERRAL CODE in the payments page
                    " />
                    <Screen2Next source={rup} heading="You get ₹ 200 as referral money" message="
                    On total purchase the friend makes, into your wallet
                    " />
                    <Screen2Next source={sun} heading="Your Friend gets ₹ 200 Off " message="
                   On his overall fee on successful purchase using your referral code 
                    " />
                    <Screen2Next source={card} heading="Transfer money from wallet" message="
                  When the wallet balance reaches
                  ₹200 or more, you can withdraw it
                    " />
                </div>
            </div>
            <div className='OwnBreadChange mt-3'>
                <a className='media_heading purple' href='/#'>Friends Who Enrolled</a><br />
                <a className='media_heading purple' style={{position:'relative',top:"5px"}} href='/#'>Terms & Condition</a>
            </div>


        </>
    )
}
