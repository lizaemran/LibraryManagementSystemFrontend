import React from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";

const StudentDetail = ({ users , books}) => {
    var location = useLocation();
    const studentId = location.pathname.split("/")[2];
    const student = users.filter(user => user.id == studentId);
    const borrowedBooks = books.filter(book => book.user_id == studentId);
    const updateReturnBookByUser = (b_id, b_name, b_author) => {
        const body = {
            user_id: null,
            dateOfBorrow: null,
            dateOfReturn: new Date(),
            name: b_name,
            author: b_author
        };
        axios.put(`http://localhost:5000/api/books/${b_id}`, body)
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
        <h2>Student Detail</h2>
        <div style={{border:'2px solid #6C63FF', padding:'20px 50px', backgroundColor:'#6C63FF', color:'white', borderRadius:'5px', textAlign:'center'}}>        
        <h2>First Name: {student[0].name}</h2>
        <p>Second Name: {student[0].surname}</p>
        {borrowedBooks.length > 0 && <p>Books Borrowed: {borrowedBooks?.map(book => book?.name).join(", ")}</p>}
        {borrowedBooks.length > 0 && <p>Return: {borrowedBooks?.map(book => <span style={{backgroundColor:'#4c47b2', margin:'2px', padding:'5px 7.5px',  borderRadius:'5px', cursor:'pointer'}} onClick={() => updateReturnBookByUser(book?.id)}>{book?.name}</span>)}</p>}

        </div>
        </div>
)};

export default StudentDetail;