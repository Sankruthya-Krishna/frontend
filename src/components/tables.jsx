import {
    Table,
    Thead,
    Tr,
    Th,

    TableContainer,
  } from '@chakra-ui/react'
  import React from 'react'
  
  function Tables() {
    return (
      <div>
        <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr colorScheme='blue'
      color={'red'}>
        <Th>Name</Th>
        <Th>Mother name</Th>
        <Th>Father name</Th>
        <Th>Email</Th>
        <Th>DOB</Th>
        <Th>Mobile no</Th>
        <Th>Branch</Th>
      </Tr>
    </Thead>

  </Table>
</TableContainer>
      </div>
    )
  }
  
  export default Tables
  