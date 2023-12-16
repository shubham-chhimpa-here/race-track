import {
    Stack,
    Button,
    Flex,
    Box
  } from '@chakra-ui/react';
import RunnerTable from '../components/RunnerTable';
import AddRunner from '../components/AddRunner';
import { Link } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function Home() {
    return (
        <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
          
          <Flex p={'2rem'} flex={1}  justifyContent="center" >
          <AddRunner />
          </Flex>
          <Flex flex={3} p={'2rem'} flexDir={'column'} justifyContent={'space-between'} gap={'1rem'}>
            <RunnerTable />
            <Box alignSelf={'flex-end'}  width={'fit-content'}>

            <Link to={'/race-track/live'} >
            <Button rightIcon={<ArrowForwardIcon />}>
              Start Race</Button>
            </Link>
            </Box>
          </Flex>
        </Stack>
      );
}