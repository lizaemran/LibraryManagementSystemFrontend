import React from "react";
import {Link} from "react-router-dom";
const BooksList = ({ books }) => {
    return (
        <div style={{  backgroundColor:'#ADA9F3', flexDirection:'column' ,display:"flex",justifyContent:"center", alignItems:"center",  width:"100vw", height:"100vh"}}>
        <h2>Books List</h2>
        <div style={{ display:"flex",justifyContent:"center", alignItems:"center", }}>
        {books.map((book, index) => 
        <div key={index} style={{margin:'5px',border:'2px solid #6C63FF', padding:'20px 50px', backgroundColor:'rgb(108, 99, 255)', color:'white', borderRadius:'5px', textAlign:'center'}}>        
        <h3>{book.name}</h3>
        <p>{book.author}</p>
        <Link to={`/book/${book.id}`} style={{color:'white'}}>
            <p >View Details</p>
        </Link>
        </div>
    )}
        </div>
    </div>
)};

export default BooksList;