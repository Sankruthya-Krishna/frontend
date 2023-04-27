import {React,useEffect,useState} from 'react'
import {
    Table,
    Thead,
    Tbody,

    Tr,

    Td,
    TableCaption,
    TableContainer,
    Thread
  } from '@chakra-ui/react'
import Chart from './Chart'
const url="/api/data"
const Honey=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
       const fetchData=async()=>{
        try{
            const res=await fetch(url)
            const js= await res.json()
            
            if(res.ok)
            {
                setData(js)
            }
    
        }
        catch(err){
            console.log(err)
        }
       }
        fetchData()
    },[])
  
    return(
    <div>
        {data&&data.map((i)=>(
            
            <Tr>
                <Td>{i.fname+" "+i.lname}</Td>
                <Td>{i.mothname}</Td>
                <Td>{i.email}</Td>
            </Tr>
           
        ))}
    </div>
    )
}
export default Honey;