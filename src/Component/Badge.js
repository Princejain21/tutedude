import React from 'react'
import '../css/card.css'

export default function Badge(props) {
  return (
    <div className='badge m-1' key={props.index}>{props.value}</div>

  )
}
