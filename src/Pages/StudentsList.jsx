import React from "react";
import {Link} from "react-router-dom";
const StudentsList = ({ users }) => {

    return (
        <div style={{ flexWrap:'wrap', backgroundColor:'#ADA9F3',display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column", width:"100vw", height:"100vh"}}>
        <h2>All Students</h2>
        <div style={{ display:"flex",justifyContent:"center", alignItems:"center"}}>
        {users.map((student, index) => 
        <div key={index} style={{margin:'5px',border:'2px solid #6C63FF', padding:'20px 50px', backgroundColor:'#6C63FF', color:'white', borderRadius:'5px', textAlign:'center'}}>        
        <h2>{student.name}</h2>
        <p>{student.surname}</p>
        <Link to={`/student/${student.id}`} style={{color:'white'}}>
            <p>View Details</p>
        </Link>

        </div>
    )}
    </div>
    </div>
)};

export default StudentsList;