import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import User from './pages/User';
import AddBlog from './pages/AddBlog';
import { useState } from 'react';
import Protected from './components/Protected';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Navbar />
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log in</button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-blog"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AddBlog />
            </Protected>
          }
        />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
