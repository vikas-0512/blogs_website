import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import { useState } from "react";
import { Form } from "react-router-dom";
import {Add_blog} from '../../fetchdata';
import {useToast} from '@chakra-ui/react';

const BlogForm = ({id,set_changed}) => {
    const [title,set_title]=useState('');
    const [body,set_body]=useState('');
    const toast= useToast();
    return ( 
        <div>
        <FormControl>
            <FormLabel>title</FormLabel>
            <Input bgColor={'white'} onChange={(e)=>{set_title(e.target.value)}} value={title}></Input>
        </FormControl>
        <FormControl>
            <FormLabel>body</FormLabel>
            <Textarea bgColor={'white'}  onChange={(e)=>{set_body(e.target.value)}} value={body} mb={10}></Textarea>
        </FormControl>
        <Button bgColor={'green.300'} boxShadow={'dark-lg'} onClick={async()=>{
          await Add_blog({id,title,body});
          toast({
            title: 'blog added succesfully',
            status: 'success'
          })
          set_changed(true);
        }}>
            save
        </Button>
        </div>

     );
}
 
export default BlogForm;