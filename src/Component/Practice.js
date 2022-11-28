import React from 'react'
import profile from '../Asset/profile.jpg';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    img: {
      height: "90px",
      width: "90px",
      borderRadius: "100px",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      padding: "5px",
      background: "#F7F7F7",
      margin:'5px',
    }
    
  }));

  
function Practice() {
  const classes = useStyles();

  return (
    <div>
      <img src={profile} className={classes.img} alt="" />
      <img src={profile} className={classes.img} alt="" />
      <img src={profile} className={classes.img} alt="" />
      <img src={profile} className={classes.img} alt="" /><br></br>
      <img src={profile} className={classes.img} alt="" />
      <img src={profile} className={classes.img} alt="" />
      <img src={profile} className={classes.img} alt="" />
      <img src={profile} className={classes.img} alt="" /><br></br>
      <img src={profile} className={classes.img} alt="" />
      <img src={profile} className={classes.img} alt="" />
      <img src={profile} className={classes.img} alt="" />
      <img src={profile} className={classes.img} alt="" />

    </div>
  )
}

export default Practice
