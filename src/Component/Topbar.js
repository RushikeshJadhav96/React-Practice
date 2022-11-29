import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles(()=>({
topbar:{
    backgroundColor:'#fff',
    padding:'20px'
}
}))

function Topbar() {
    const classes = useStyles();
  return (
    <div className={classes.topbar}>
      
    </div>
  )
}

export default Topbar
