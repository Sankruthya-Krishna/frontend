//import React from 'react'
//import { Field, Form, Formik,ErrorMessage } from 'formik';
// import { Box,Text,useState} from '@chakra-ui/react'

// function Submission() {
//     const  initialValues={count:""}
//     const[count,setcount]=useState(0)
//   return (
     
// <Box width='100%'> {!count?<Text fontSize='8xl' color='green' width='100%' paddingTop='40'>
//   "Success()"  </Text>:<Text width='100%' fontSize='6xl'>Hey There fill this</Text>}</Box>

  
//   )
// }


// export default Submission
import React from 'react'

 function Sub() {
    const [honey,setHoney]=React.useState(false)
  return (
    <div>
        {honey?<h1>hello</h1>:<h1>hi</h1>}
    </div>
  )
}

export default Sub

