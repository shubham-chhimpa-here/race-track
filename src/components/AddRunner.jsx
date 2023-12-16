import {
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    VStack,
    Text
  } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContextProvider';

export default function AddRunner() {
    const {runner, setRunner} = useContext(DataContext);
    
    const [data, setData] = useState({
        name: null,
        speed: null ,
        startTime: null

    })
    function handleChange(e) {
        setData({...data, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(runner.length == 10) {
            alert(`can't add more then 10 runner`);
            return
        }
        const newData = [...runner, data]
        setRunner(newData)
    }

    return (
        <Stack spacing={4} pt={'2rem'} >
        <Stack align="flex-start">
          <Heading fontSize="3xl" textTransform={'uppercase'}>Runner Details</Heading>
          <Text>* You can add maximum 10 runners</Text>
        </Stack>
        
        <VStack
          as="form"
          onSubmit={handleSubmit}
          spacing={8}
          boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
          h="max-content !important"
          bg={useColorModeValue('white', 'gray.700')}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
        >
          <VStack spacing={4} w="100%">
            <FormControl >
              <FormLabel>Name</FormLabel>
              <Input rounded="md" type="text" name="name" onChange={handleChange} required/>
            </FormControl>
            <FormControl>
              <FormLabel>Speed</FormLabel>
              <Input rounded="md" type="number"  name="speed" onChange={handleChange} required/>
            </FormControl>
            <FormControl >
              <FormLabel>Start Time</FormLabel>
              <Input rounded="md" type="number" name="startTime" onChange={handleChange} />
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
            type='submit'
              bg="green.300"
              color="white"
              _hover={{
                bg: 'green.500'
              }}
              rounded="md"
              w="100%"
            >
              + Add Runner
            </Button>
          </VStack>
        </VStack>
      </Stack>
    )
}