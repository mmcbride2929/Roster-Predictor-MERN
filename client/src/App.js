import { Box, ChakraProvider } from '@chakra-ui/react'
import { RosterProvider } from './context/RosterContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Results from './pages/Results'
import Header from './components/global/Header'
import { myTheme } from './theme/theme'
import Footer from './components/global/Footer'

const app = () => {
  return (
    <Box className="app" minH="100vh" display="flex" flexDirection="column">
      <ChakraProvider theme={myTheme}>
        <RosterProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results" element={<Results />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </RosterProvider>
      </ChakraProvider>
    </Box>
  )
}

export default app
