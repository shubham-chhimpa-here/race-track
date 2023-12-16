// import { Box, Stack } from "@chakra-ui/react";
import {
    Stack,
    Button,
    Flex
  } from '@chakra-ui/react';
import RunnerTable from '../components/RunnerTable';
import AddRunner from '../components/AddRunner';

export default function Home() {
    return (
        <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
          
          <Flex p={'2rem'} flex={1}  justifyContent="center" >
          <AddRunner />
          </Flex>
          <Flex flex={3} p={'2rem'} flexDir={'column'} justifyContent={'space-between'}  height={''} gap={'1rem'}>
            <RunnerTable />
            <Button alignSelf={'flex-end'} width={'fit-content'}>Start Race </Button>
          </Flex>
        </Stack>
      );
}