import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import React,{useEffect,useState} from "react";
import axios from "axios";
import BooksList from './Pages/BooksList';
import StudentsList from './Pages/StudentsList';
import BookDetail from './Pages/BookDetail';
import StudentDetail from './Pages/StudentDetail';
import Home from './Pages/Home';
function App() {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  useEffect( () => {
     axios.get("http://localhost:5000/api/users/")
    .then(res => {
        setUsers(res.data);
    })
    .catch(err => console.log(err));

     axios.get("http://localhost:5000/api/books/")
      .then(res => {
          setBooks(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/books" element={<BooksList books={books} />} />
      <Route path="/book/:id" element={<BookDetail users={users} books={books} />} />
      <Route path="/students" element={<StudentsList users={users} />} />
      <Route path="/student/:id" element={<StudentDetail  users={users} books={books}   />} />
      <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
      />
    </Routes>
  );
}

export default App;
