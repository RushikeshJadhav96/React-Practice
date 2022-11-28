import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import Book1 from "../Asset/book1.jpg";
import Book2 from "../Asset/book2.jpeg";
import Book3 from "../Asset/book3.jpg";
import Book4 from "../Asset/book4.jpg";
import { Button } from "@mui/material";

const useStyles = makeStyles(() => ({
  booklistMain: {
    display: "flex",
    margin: "20px",
  },

  bookCover: {
    height: "230px",
    width: "170px",
    margin: "20px 60px 20px 0px",
    borderRadius:'20px'
  },

  title1: {
    marginLeft: "20px",
    fontFamily: "sans-serif",
    fontSize: "bold",
  },

  bookName: {
    // marginLeft:"20px",
    fontSize: "20px",
    fontFamily: "sans-serif",
  },

  booklistHeading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems:'center'
  },
  viewBtn: {
    marginRight: "80px",
  },
}));

function Booklist() {
  const classes = useStyles();
  useEffect(() => {
    getBooks();
  }, []);

  // const [books,setBooks] = useState([]);

  async function getBooks() {
    // try{
    //   const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDp2igOJotLLiNmxYdjM6ewd56mknFpRm8`);
    //   const data = await res.data;
    //   // console.log(data);
    //   setBooks(data.Search);
    // }
    // catch(error){}
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDp2igOJotLLiNmxYdjM6ewd56mknFpRm8";
    const rel = await fetch(url);
    const resJson = await rel.json();
    console.log(resJson);
  }

  const bookList = [
    { bookImg: Book1, name: `How High` },
    { bookImg: Book2, name: "Worn" },
    { bookImg: Book3, name: "Stephen King" },
    { bookImg: Book4, name: "Take my Hand" },
  ];

  return (
    <div>
      <div className={classes.booklistHeading}>
        <h1 className={classes.title1}>My Books</h1>
        <div className={classes.viewBtn}>
          <Button variant="outlined">View All</Button>
        </div>
      </div>
      <div className={classes.booklistMain}>
        {bookList.map((book) => (
          <div>
            <img
              src={book.bookImg}
              alt=""
              srcset=""
              className={classes.bookCover}
            />
            <h3 className={classes.bookName}>{book.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booklist;
