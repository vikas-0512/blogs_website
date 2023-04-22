import { VStack, Heading, FormControl, FormLabel, Input , HStack,Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, useToast} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SignupForm from "./signupform";
import { useNavigate } from "react-router-dom";
import { User_Login } from "../../fetchdata";

const LoginForm = () => {
    const [username,set_username]=useState('');
    const [password,set_password]=useState('');
    const [changed,set_changed]=useState(false);
    const{isOpen,onOpen,onClose}=useDisclosure();
    const [details,set_details]=useState([]);
    const [isloading,set_loading]=useState(false);
    const toast=useToast();
    const navigate=useNavigate();
    const mclose=()=>{
        onClose();
        set_changed(!changed);
    }
    useEffect(()=>{
        if(details.length!==0)
        {
           toast({
              status: 'success',
              title: 'welcome user'
           })
           navigate('/app/',{state: {
              id: parseInt(details[0]['id']),
              name: details[0]['username']
           }});
        }
        else if(isloading==true)
        {
            toast({
                status:'error',
                title: 'invalid credentials'
            })
        }

    },[details])
    return ( 
        <VStack bgColor={'pink.200'} p={10} boxShadow={'dark-lg'} borderRadius={20}>
            <Heading size={'md'} mb={6} bgColor={'yellow.200'} p={2} borderRadius={5}>LOGIN</Heading>
            <FormControl>
                <FormLabel fontWeight={'bold'}>username:</FormLabel>
                <Input  bgColor={'white'} mb={6} width={350} onChange={(e)=>{set_username(e.target.value)}} value={username}/>
            </FormControl>
            <FormControl>
                <FormLabel fontWeight={'bold'}>password:</FormLabel>
                <Input bgColor={'white'} mb={10} onChange={(e)=>{set_password(e.target.value)}} value={password}/>
            </FormControl>
            <HStack spacing={20}>
                <Button bgColor={'green.200'} boxShadow={'dark-lg'} onClick={async()=>{
                  await User_Login({username,password,set_details});
                  set_loading(true);
                }}>
                login
                </Button>
                <Button bgColor={'red.300'} boxShadow={'dark-lg'} onClick={onOpen}>
                    register
                </Button>
            </HStack>
            <Modal
            isOpen={isOpen}
            onClose={mclose}
            >
            <ModalOverlay/>
               <ModalContent bgColor={'yellow.100'}>
                    <ModalHeader>signup</ModalHeader>
                    <ModalCloseButton/>
                       <SignupForm set_changed={set_changed}/>
               </ModalContent>
            </Modal>
        </VStack>
     );
}
 
export default LoginForm;