import React from "react";
import { Link } from "react-router-dom";
import library from "../Media/library.svg";
const Home = () => {

    return (
        <div style={{backgroundColor:'#ADA9F3', width:"100vw", height:"100vh",display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column",}}>
        <div style={{textAlign:"center"}}>
        <img src={library} style={{height:'auto', width:'70%'}} alt='library' />
        <h2>Library Management System</h2>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <Link to='/books' style={{textDecoration:'none', padding:'0px 25px', backgroundColor:'#6C63FF', color:'white', borderRadius:'5px'}}>
        <div>
        <h4>Books</h4>
        </div>
        </Link>
        <Link to='/students' style={{textDecoration:'none', padding:'0px 25px', backgroundColor:'#6C63FF', color:'white', borderRadius:'5px'}}>
        <div>
        <h4>Students</h4>
        </div>
        </Link>
        </div>
        </div>
        </div>
    );
    }

export default Home;
