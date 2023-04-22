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
import { BrowserRouter, Routes ,Route, useLocation, useNavigate } from 'react-router-dom';
import ViewBlog from './screens/viewblog';
const AllBlogs = () => {
    const [changed,set_changed]=useState(false);
    const [blogs,set_blogs]=useState([]);
    const {isOpen,onOpen,onClose}=useDisclosure();
    const location=useLocation();
    const navigate=useNavigate();
    var id,name;
    if(location.state!=null)
    {
       id=location.state.id;
       name=location.state.name;
    }
    const b=blogs.map((item)=>{
        return (
        <BlogCard key={item.blogid} id={item.blogid} title={item.title} body={item.body} set_changed={set_changed}/>
        )
    })
    console.log('hey....',blogs);
    const mClose=()=>{
        onClose();
        set_changed(!changed);
    }
    console.log(blogs);
    useEffect(()=>{
        if(location.state===null)
        {
            navigate('/');
        }
        Get_blogs({id,set_blogs});
    },[changed])
    return (  
        <div className='App' >
            <HStack ml={300} mb={10} spacing={20} >
            <Heading>
                <Center>Your Blogs</Center>
            </Heading>
            <Button
            bgColor={'green.100'}
            boxShadow={'dark-lg'}
            onClick={onOpen}
            >
                Add Blog
            </Button>
            </HStack>
            <HStack>
            <Wrap>
            {(blogs.length===0)?<Text>No Blogs to display</Text>:b}
            </Wrap>
            </HStack>
            <Modal
                isOpen={isOpen}
                onClose={mClose}
            >
                <ModalOverlay/>
                <ModalContent bgColor={'blue.100'} >
                    <ModalHeader>Add blog</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <BlogForm id={id} set_changed={set_changed}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}
 
export default AllBlogs;