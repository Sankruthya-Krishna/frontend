import React from 'react'
//import React from 'react'
import {GridItem,Grid,Link,Box} from '@chakra-ui/react'
function Column() {
  return (
    <div>
    <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={200} colSpan={1} bg='teal'>
    <Box>
  <Link color='white' href='#'>REGISTRATION                  
  </Link>
  </Box>
  <Link color='white' href='#'>DISPLAY
  </Link>
  
  </GridItem>
  
</Grid>
    </div>
        
  )
}

export default Column

