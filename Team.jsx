import React from 'react';
import { Box, Grid, GridItem, Image } from '@chakra-ui/react';

function Team() {
  return (
    <Grid 
      templateColumns="repeat(3, 1fr)"
      gap={6}
    >
      <GridItem display='flex'
      alignItems="center"
      justifyContent='center'>
        <Box w='200px' h='200px' bg='white'>
          <Image borderRadius='full' src='MI.JPEG' />
        </Box>
      </GridItem>
      <GridItem display='flex'
      alignItems="center"
      justifyContent='center'>
        <Box w='200px' h='200px' bg='white'>
          <Image borderRadius='full' src='CSK.JPEG' />
        </Box>
      </GridItem>
      <GridItem display='flex'
      alignItems="center"
      justifyContent='center'>
        <Box w='200px' h='200px' bg='white'>
          <Image borderRadius='full' src='KKR.PNG' />
        </Box>
      </GridItem>
      <GridItem display='flex'
      alignItems="center"
      justifyContent='center'>
        <Box w='200px' h='200px' bg='white'>
          <Image borderRadius='full' src='PK.JPEG' />
        </Box>
      </GridItem>
      <GridItem display='flex'
      alignItems="center"
      justifyContent='center'>
        <Box w='200px' h='200px' bg='white'>
          <Image borderRadius='full' src='SRH.JPEG' />
        </Box>
      </GridItem>
      <GridItem display='flex'
      alignItems="center"
      justifyContent='center'>
        <Box w='200px' h='200px' bg='white'>
          <Image borderRadius='full' src='LSG.WEBP' />
        </Box>
      </GridItem>
      <GridItem display='flex'
      alignItems="center"
      justifyContent='center'>
        <Box w='200px' h='200px' bg='white'>
          <Image borderRadius='full' src='RR.JPEG' />
        </Box>
      </GridItem>
      <GridItem display='flex'
      alignItems="center"
      justifyContent='center'>
        <Box w='200px' h='200px' bg='white'>
          <Image borderRadius='full' src='GT.CMS' />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Team;
