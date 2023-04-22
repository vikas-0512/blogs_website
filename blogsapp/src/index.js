import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react';
import Login from './screens/login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ViewBlog from './screens/viewblog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/app' element={<App/>}/>
            <Route path='/app/*' element={<App/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  </ChakraProvider>
);

