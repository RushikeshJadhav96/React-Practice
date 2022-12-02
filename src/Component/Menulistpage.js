import React from 'react'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  // icon: {
  //   // margin: "20px",
  //   // marginRight: "20px",
  //   width: "2em",
  //   height: "2em",
  // },
  img: {
    height: "20px",
    width: "20px",
    // borderRadius: "100px",
    // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    // padding: "5px",
    // background: "#F7F7F7",
    color:'#F7F7F7'
  },
  display:
  {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:'10px'

  },
  font:{
    color:'#b4b4b4',
    marginLeft:'20px',
    fontFamily:'sans-serif',
    fontSize:'20px',
  }
}));



function Menulistpage({icon , name}) {
  const classes = useStyles();
  return (
    <div className={classes.display}>
      {/* <div className={classes.icon}>{icon}</div> */}
      <img src={icon} className={classes.img}/>
      <h5 className={classes.font}>{name}</h5>
    </div>
  )
}

export default Menulistpage
