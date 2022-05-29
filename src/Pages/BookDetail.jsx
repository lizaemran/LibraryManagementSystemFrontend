import React from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
const BookDetail = ({ users, books }) => {
    var location = useLocation();
    const bookId = location.pathname.split("/")[2];
    const book = books.filter(book => book.id == bookId);
    const updateBookHandler = (u_id,b_name,b_author) => {
        const body = {
            id: bookId,
            name: b_name,
            author: b_author,
            user_id: u_id,
            dateOfBorrow: new Date(),
            dateOfReturn: new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 7))
        };
        axios.put(`http://localhost:5000/api/books/${bookId}`, body)
            .then(res => {
                window.location.href='/';
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div  style={{flexWrap:'wrap', backgroundColor:'#ADA9F3',display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column", width:"100vw", height:"100vh"}}>
        <h2>Book Detail</h2>'
        <div style={{border:'2px solid #6C63FF', padding:'20px 50px', backgroundColor:'#6C63FF', color:'white', borderRadius:'5px', textAlign:'center'}}>
        <h2>{book[0]?.name}</h2>
        <p>{book[0]?.author}</p>
        {book[0]?.user_id && <p>Date Of Borrow {book[0]?.dateOfBorrow}</p> }
         {book[0]?.user_id && <p>Date Of Return {book[0]?.dateOfReturn}</p>}
        {book[0]?.user_id && <p>Borrowed by Student Roll No. {book[0]?.user_id}</p>}
        {!book[0]?.user_id && <p>Borrow by: {users?.map(user => <span style={{backgroundColor:'#4c47b2', margin:'2px', padding:'5px 7.5px',  borderRadius:'5px', cursor:'pointer'}} onClick={() => {updateBookHandler(user?.id,book[0]?.name,book[0]?.author)}} >{user?.id}</span>)}</p>}
        </div>
        </div>
    );
    }

export default BookDetail;