import { Center, Heading, VStack ,Text, Card} from "@chakra-ui/react";
import '../App.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ViewBlog = () => {
    const location=useLocation();
    const navigate=useNavigate();
    var title,body;
    if(location.state!=null)
    {
        title=location.state.title;
        body=location.state.body;
    }
    useEffect(()=>{
        if(location.state==null)
        {
            navigate('/');
        }
    })
    return (  
        <VStack>
            <Heading>
                Your Blog
            </Heading>
            <Center>
                <Heading bgColor={'green.200'} p={3} borderRadius={10} boxShadow={'dark-lg'}>{title}</Heading>
            </Center>
            <div className="blog">
                <Card mt={10} width={800} bgColor={'blue.100'} borderRadius={20} boxShadow={'2xl'}>
                   <Text p={10}>{body}</Text>
                </Card>
            </div>
        </VStack>
    );
}
 
export default ViewBlog;