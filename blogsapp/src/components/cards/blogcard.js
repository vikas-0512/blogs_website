import { Button } from "@chakra-ui/button";
import { Card, CardHeader } from "@chakra-ui/card";
import { Heading, VStack ,Stack, Text, HStack} from "@chakra-ui/layout";
import { useNavigate } from "react-router";
import {DeleteIcon,ViewIcon} from '@chakra-ui/icons';
import { Delete_blog } from "../../fetchdata";

const BlogCard = ({ id, title, body , set_changed}) => {
  const navigate = useNavigate();
  return (
    <VStack>
      <Stack spacing="10">
        <HStack>
          <Card bgColor={'orange.100'} boxShadow={'2xl'}ml={200} p={3} width={500} >
              <HStack ml={20} mr={10} align={'center'} justify={'space-between'} >
                  <Text fontWeight={'bold'} >Title: {title}</Text>
                  <Button bgColor={'green.200'} boxShadow={'dark-lg'} onClick={()=>{
                    navigate('/app/viewblog',{state: {title,body}})
                  }}><ViewIcon></ViewIcon></Button>
              </HStack>
          </Card>
          <Button bgColor={'red.300'} p={0} boxShadow={'dark-lg'} onClick={async ()=>{
            await Delete_blog({id});
            set_changed(true);
          }}>
            <DeleteIcon ></DeleteIcon>
            </Button>
        </HStack>
      </Stack>
    </VStack>
  );
};

export default BlogCard;
