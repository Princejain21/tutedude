import React from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'
import {Box,Breadcrumbs, Typography} from '@mui/material'
import { Link } from 'react-router-dom'

export default function Breadcrumb() {
  const parms=useParams();
  return (
    <div className='OwnBreadChange '>
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumb" separator=">">
        <Link underline='hover' to="/" className='text-dark'>UI/UX</Link>
        <Link underline='hover' to="/referEarn" className='text-dark'>Refer & Earn</Link>
        {Object.keys(parms).length!==0?parms.referEarn==="referEarn"?<Typography>Friend Reffered</Typography>:null:null}
      </Breadcrumbs>
    </Box>
    <Link className='ShowGoBack  purple' to="/">
    <i className="fa fa-long-arrow-left mx-1"></i>
    go back
    </Link>
    </div>
 
  )
}
