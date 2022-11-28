import { makeStyles } from "@mui/styles";
import React from "react";
import bgImg from "../Asset/book.jpg";
import Booklist from "./Booklist";

const useStyles = makeStyles(() => ({
  backimg: {
    height: "400px",
    width: "868px",
    borderRadius: "20px",
  },
  container: {
    position: "relative",
    margin: "20px",
    marginTop: "60px",
  },
  textflow: {
    position:'absolute',
    bottom:'2rem',
    color:'white',
    margin:'20px'
    
  }
}));

function Mainpage() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <img src={bgImg} alt="Read Book" className={classes.backimg} />
        <div className={classes.textflow}>
          <h1>Read Books on Daly Bases</h1><br/><br/>
          <h4>Read More</h4>
        </div>
      </div>
      <Booklist/>
    </div>
  );
}

export default Mainpage;
