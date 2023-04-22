import logo from './logo.svg';
import './App.css';
import { Center, HStack, Heading, Text, VStack, Wrap} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useEffect, useState } from 'react';
import BlogCard from './components/cards/blogcard';
import {Get_blogs} from './fetchdata';
import { Modal,ModalBody,ModalCloseButton,ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { useDisclosure } from '@chakra-ui/hooks';
import BlogForm from './components/forms/blogform'
import { BrowserRouter, Routes ,Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import ViewBlog from './screens/viewblog';
import AllBlogs from './allblogs';

function App() {
  const location=useLocation();
  var id,name;
  if(location.state!=null)
  {
     id=location.state.id;
     name=location.state.name;
  }
  const navigate=useNavigate();
  useEffect(()=>{
    if(location.state===null)
    {
      navigate('/');
    }
  })
  return (
    <div className="App" style={{width:'100vw', height: '100vh'}}>
      <VStack
      bgColor={'yellow.100'}
      w={'100%'}
      h={'100%'}
      className='back'
      >
      <HStack
      p={3}
      mb={5}
      bgColor={'blue.100'}
      w={'100%'}
      boxShadow={'dark-lg'}
      >
        <Center>
           <Heading ml={800}>{name} Blogs</Heading>
        </Center>
      </HStack>
        <VStack
        bgColor={'pink'}
        borderRadius={20}
        width={'1000px'}
        height={'850px'}
        boxShadow={'dark-lg'}
        p={30}
        >
            <Routes>
              <Route path='/' element={<AllBlogs/>}/>
              <Route path='/viewblog' element={<ViewBlog/>}/>
            </Routes>
        </VStack>
      </VStack>
    </div>
  );
}

export default App;
