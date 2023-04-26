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
        <Th>mothername</Th>
        <Th>fathername</Th>
        <Th>email</Th>
        <Th>dob</Th>
        <Th>mobile no</Th>
        <Th>branch</Th>
      </Tr>
    </Thead>

  </Table>
</TableContainer>
      </div>
    )
  }
  
  export default Tables
  