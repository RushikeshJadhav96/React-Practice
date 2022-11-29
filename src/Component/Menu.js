import React from "react";
// import menuListing from './MenuListing';
// import { HiOutlineDocumentText } from "react-icons/hi";
import Menulistpage from "./Menulistpage";
import { makeStyles } from "@mui/styles";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

import profile from "../Asset/profile.jpg";


const useStyles = makeStyles(() => ({
  Menu: {
    margin:'20px',
    // marginLeft:'50px',
    marginRight:'50px',
    padding:'20px',
    borderBottom:'1px'
  },
}));

function Menu() {
  const classes = useStyles();

  const menuList = [
    { icon: DescriptionOutlinedIcon, name: "Classroom" },
    { icon: HomeOutlinedIcon, name: "Homework" },
    { icon: HeadphonesOutlinedIcon, name: "Audio books" },
    { icon: LibraryBooksOutlinedIcon, name: "My Library" },
    { icon: profile, name: "Classmate" },
  ];
  return (
    <div>
      <div className={classes.Menu}>
        {menuList.map((menu) => (
          <Menulistpage icon={menu.icon} name={menu.name} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
