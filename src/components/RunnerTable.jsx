import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContextProvider'

export default function RunnerTable() {
    const { runner } = useContext(DataContext);

    return (

        <TableContainer width={'full'}>
            <Table variant='simple' colorScheme='teal'>
                <TableCaption placement='top'>
                    <Heading textAlign={'start'} fontSize={'2xl'}>List of Participant</Heading>
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Speed</Th>
                        <Th>Start Time</Th>
                        <Th>End Time</Th>
                    </Tr>
                </Thead>
                <Tbody>

                    {
                        runner.map(({name, speed, startTime}, i) => (
                            <Tr key={i}>
                                <Td>{name}</Td>
                                <Td>{speed}km/h</Td>
                                <Td>{startTime}</Td>
                                <Td>--</Td>
                            </Tr>
                        ))
                    }
                   


                </Tbody>

            </Table>
        </TableContainer>
    )

}