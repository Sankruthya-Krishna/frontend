import {
    Table,
    Thead,
    Tr,
    Th,
    Td,
    TableContainer,
    Tbody,
  } from '@chakra-ui/react'
  import {React,useEffect,useState} from 'react'
import Honey from './DataFetch'
const url="/api/data"
  function Tables() {
    const [data,setData]=useState([])
    useEffect(()=>{
       const fetchData=async()=>{
        try{
            const res=await fetch(url)
            const js= await res.json()
            
            if(res.ok)
            {
                setData(js)
                console.log(js)
            }
    
        }
        catch(err){
            console.log(err)
        }
       }
        fetchData()
    },[])
    return (
      <div>
        <TableContainer>
  <Table variant='striped' colorScheme='gray'>
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
      <Tbody>
      {data&&data.map((i)=>(
            
            <Tr key={i._id}>
                <Td>{i.fname+" "+i.lname}</Td>
                <Td>{i.mothname}</Td>
                <Td>{i.fathname}</Td>
                <Td>{i.email}</Td>
                <Td>{i.dob}</Td>
                <Td>{i.phonenum}</Td>
               <Td>{i.branch}</Td>
            </Tr>
            
           
        ))}
      </Tbody>
  </Table>
</TableContainer>
      </div>
    )
  }
  
  export default Tables
  