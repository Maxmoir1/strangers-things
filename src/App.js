import React from 'react';
import { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
//import { ColorModeSwitcher } from './ColorModeSwitcher';
//import { Logo } from './Logo';

import { Link, Routes, Route } from 'react-router-dom';
import Profile from './routes/Profile';
import Posts from './routes/Posts';
import AddPost from './routes/AddPosts';
import SinglePost from './routes/SinglePost';
import Register from './routes/Register';
import Login from './routes/login';
import logout from './routes/components.js/auth';


function App() {
  const [token, setToken] = useState(window.localStorage.getItem('token'));


  return (
    <div>
      App
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',


        }}
      >
        {!token ? <Link to="/login">login</Link> : null} | {!token ? <Link to="/register">Register</Link> : null} |
        <Link to="/posts">Posts</Link> |{' '}
        <Link to="/single-post">Single Post</Link> |{' '}
        <Link to="/add-post">Add a Post</Link> |{' '}
        {token ? <Link to="/profile">profile</Link> : null}|{' '}
        {token ? <button onClick={() => logout(setToken)}>logout</button> : null}
      </nav>
      <Routes>
        <Route path="profile" element={<Profile token={token} />} />
        <Route path="posts" element={<Posts />} />
        <Route path="add-post" element={<AddPost />} />
        <Route path="single-post" element={<SinglePost />} />
        <Route path="register" element={<Register setToken={setToken} />} />
        <Route path="login" element={<Login setToken={setToken} />} />
      </Routes>
    </div>
  );
}
export default App;
