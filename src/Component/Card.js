import React from 'react'
import '../css/card.css'
import Badge from './Badge';

export default function Card(props) {
    const {badgevalue}=props;
    return (
<>
        <div className="card text-white m-2 d-block">
            <div className="card-body">
                <div className='d-flex flex-row'>
                <h5 className="card-title">{props.title}</h5>
                <h5 className="card-title ml-auto fontSize">{props.date}</h5>
                </div>
                <h6 className="card-subtitle mb-2 text-white">Course Enrolled {props.value}</h6>
                <div className='d-flex flex-wrap'>
                {badgevalue?badgevalue.map((elem,index)=>{
                    return   <Badge value={elem}  index={index}/>
                }):null}
                </div>
                <p className='fontSize2 mt-3'>Referral Amount <span style={{fontSize:"24px",lineHeight:"36px"}}>₹{props.price}</span></p>
              
            </div>
        </div>
</>

    )
}
