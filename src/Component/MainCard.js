import React from 'react'
import Card from './Card'
import '../css/card.css'

export default function MainCard() {
const mainarray=['UI/UX','Photoshop','illustratior','python','MERN',"Java"]
const mainarray2=['UI/UX','Photoshop','illustratior','python','MERN',"Java","C++"]
   

    return (

        <>
            <div className='OwnBreadChange mt-5 '>
                {/* here we are providing only view value we can change with respect to recoreds. */}
                <p className='purple media_title pl-3 '>Friends who enrolled <span className='text-secondary'>(3)</span></p>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active d-flex flex-wrap">
                          <Card title="Dheeraj Saxena" price="185" badgevalue={mainarray} date="14 Sep,2022" value="(6)"/>
                          <Card title="Shubhash Mishra" price="485" badgevalue={mainarray2} date="15 Sep,2022" value="(23)"/>
                          <Card title="Prafull Kumar " price="485" badgevalue={mainarray2} date="15 Sep,2022" value="(23)"/>
                        </div>
                    </div>

                </div>
            <a href="/#" className='media_heading purple pl-2'>Terms & Conditions</a>

            </div>
        </>
    )
}
