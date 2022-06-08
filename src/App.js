import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Courses from './components/Courses';
import Header from './components/Header';
import Userinfo from './components/Userinfo';
import Userdetails from './components/Userdetails';

function App() {
  return (
    <>
    
    <Router>
    <Header />
    <section className="container">
      <Routes>
        <Route path="/" element={<Courses/>} />
        <Route path="/userinfo/:id" element={<Userinfo />}/>
        <Route path="/userdetails" element={<Userdetails />} />
      </Routes>
      </section>
    </Router>
    </>
  )
}

export default App;
