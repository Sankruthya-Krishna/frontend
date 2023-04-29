import { Center, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
//import React from 'react'

function grid() {
  return (
    <div>
        <Grid
  h='1000px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={3} colSpan={2} bg='teal'><Center><h1>TOP 3 SCORES BY TEAMS</h1></Center></GridItem> 
  
  <GridItem colSpan={1} bg='papayawhip' ><Center><h1>TOP 3  SIXES SCORES BY TEAMS</h1></Center></GridItem>
<GridItem colSpan={1} bg='papayawhip' ><Center><h1>TOP 3  FOURS SCORES BY TEAMS</h1></Center></GridItem>
<GridItem colSpan={1} bg='papayawhip'><Center><h1>TOP 5 BOWLERS</h1></Center></GridItem> 
  <GridItem colSpan={3} bg='teal'><Center><h1>TOP 5 INDIAN SCORERS</h1></Center></GridItem> 
</Grid>
      </div>
      )
}
export default grid
