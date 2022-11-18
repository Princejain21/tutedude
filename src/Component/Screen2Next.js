import React from 'react'

export default function Screen2Next(props) {
    return (
        <div className='col col-sm-5 m-2'>
            <div className="media">
                <div className='screen2_first mr-3 rounded rounded-circle text-center pt-3 pl-3'>
                <img className="mr-3 text-center"  src={props.source} alt="Generic placeholder image"/>
                </div>
                    <div className="media-body">
                        <h5 className="mt-0 media_heading font-weight-bold" >{props.heading}</h5>
                        <p className='media_message'>{props.message}</p>
                    </div>
            </div>
        </div>
    )
}
