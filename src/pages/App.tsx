import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingMain from './terminal/Terminal.App'
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles'

const newTheme: Theme = createTheme({
  typography: {
    fontFamily: "'Fira Code', monospace"
  }
})

function App() {

  return (
    <ThemeProvider theme={newTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/Portfolio" element={<LandingMain />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
