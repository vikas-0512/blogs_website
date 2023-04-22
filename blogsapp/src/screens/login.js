import { Heading , VStack,Image} from "@chakra-ui/layout";
import LoginForm from "../components/forms/loginform";
import '../App.css'
const Login = () => {
    return (  
        <VStack className="frontpage">
            <VStack
            bgColor={'blue.200'} 
            borderRadius={10}
            mt={2}
            boxShadow={'dark-lg'}
            mb={20}
            >
                <Heading
                fontWeight={'bold'}
                p={5}
                >BLOGS WEBSITE</Heading>
            </VStack>
             <LoginForm/>
        </VStack>
    );
}
 
export default Login;