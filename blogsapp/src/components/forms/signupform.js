import { Button, FormControl, FormLabel, VStack, useToast ,Input} from "@chakra-ui/react";
import { useState } from "react";
import { Add_user } from "../../fetchdata";

const SignupForm = ({set_changed}) => {
    const [username,set_username]=useState('');
    const [password,set_password]=useState('');
    const toast=useToast();
    return ( 
        <VStack p={5}>
            <FormControl>
                <FormLabel fontWeight={'bold'}>username</FormLabel>
                <Input bgColor={'white'} onChange={(e)=>{set_username(e.target.value)}} value={username}></Input>
            </FormControl>
            <FormControl>
                <FormLabel fontWeight={'bold'}>password</FormLabel>
                <Input mb={5} bgColor={'white'} onChange={(e)=>{set_password(e.target.value)}} value={password}></Input>
            </FormControl>
            <Button bgColor={'green.200'} boxShadow={'2xl'} onClick={async()=>{
                await Add_user({username,password});
               toast({
                title: 'added user successfully',
                status: 'success'
               })
               set_changed(true)
            }}>
                save
            </Button>
        </VStack>
    );
}
 
export default SignupForm;