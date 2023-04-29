import React from 'react'
import { Image,Box,Stack } from '@chakra-ui/react'
function Team() {
  return (

     <Stack direction={['column', 'row']} spacing='24px'>
  <Box w='300px' h='300px' bg='white'>
  <Image    borderRadius='full'
src='MI.JPEG'  />
  </Box>
  <Box w='300px' h='300px' bg='white'>
  <Image    borderRadius='full'
src='CSK.JPEG'  />
</Box>
<Box w='250px' h='250px' bg='white'>
  <Image    borderRadius='full'
src='KKR.PNG'  />
</Box>
<Box w='300px' h='300px' bg='white'>
  <Image    borderRadius='full'
src='PK.JPEG'  />
</Box>
<Box w='350px' h='350px' bg='white'>
  <Image    borderRadius='full'
src='SRH.JPEG'  />
</Box>
<Box w='350px' h='350px' bg='white'>
  <Image    borderRadius='full'
src='LSG.WEBP'  />
</Box>
<Box w='350px' h='350px' bg='white'>
  <Image    borderRadius='full'
src='RR.JPEG'  />
</Box>
<Box w='350px' h='350px' bg='white'>
  <Image    borderRadius='full'
src='GT.CMS'  />
</Box>
  
</Stack>

  )
}

export default Team
