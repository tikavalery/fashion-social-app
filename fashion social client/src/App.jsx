import React from 'react';
import './App.css';
import Create from './create.jsx'
import Post from './post.jsx'
import Profile from './profile.jsx'
import Login from './login.jsx'
import Signup from './signup.jsx'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div>
          <Router>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path='/createpost' element={<Create />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      
    </Router>
    </div>
  );
}
export default App;