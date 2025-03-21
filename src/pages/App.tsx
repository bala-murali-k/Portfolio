import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingMain from './terminal/Terminal.App.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const newTheme: any = createTheme({
  typography: {
    fontFamily: "'Fira Code', monospace"
  }
})

function App() {

  return (
    <ThemeProvider theme={newTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingMain />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
