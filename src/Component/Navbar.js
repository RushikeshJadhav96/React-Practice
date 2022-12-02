import React from "react";
import profile from "../Asset/profile.jpg";
import { makeStyles } from "@mui/styles";
import { MdNotificationsNone } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";
import Menu from "./Menu";

const useStyles = makeStyles(() => ({
  main: {
    display: "flex",
    // background: "red",
    alignItems: "center",
    padding: "10px",
    color: "#b4b4b4",
    // marginTop: "30px",
    justifyContent: "space-between",
  },

  icon: {
    margin: "20px",
    marginRight: "20px",
    width: "2em",
    height: "2em",
  },
  icon1: {
    marginRight: "20px",
    width: "2em",
    height: "2em",
    justifyContent: "flex-end",
  },
  // header: {
  //   marginRight: "20px",
  //   paddingLeft: "20px",
  // },
  img: {
    height: "90px",
    width: "90px",
    borderRadius: "100px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    padding: "5px",
    background: "#F7F7F7",
    margin:'30px',
  },
  // imgbg:{
  //   alignItems:'center',
  //   height: "95px",
  //   width: "95px",
  //   background:'red',
  //   borderRadius:'100px'
  // },
  profileName: {
    textAlign: "center",
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <MdNotificationsNone className={classes.icon} />
        <BiMessageAltDetail className={classes.icon1} />
      </div>
      <div className={classes.profileName}>
        <img src={profile} alt="" srcset="" className={classes.img} />

        <h3 className={classes.header}>John Cena</h3>
        <Menu/>
      </div>
      
    </div>
  );
}

export default Navbar;
