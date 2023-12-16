import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import DataContextProvider from './context/DataContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <BrowserRouter>
  <DataContextProvider>
    <App />
  </DataContextProvider>
  </BrowserRouter>
  </ChakraProvider>
)
