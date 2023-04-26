//import logo from './logo.svg';
import './App.css';
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
//import Dash from './components/Dashboard';
import Formk from './components/Form'
import Honey from './components/DataFetch';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
    <Formk/>
    <Honey/>
    </ChakraProvider>

  )
}
export default App;
