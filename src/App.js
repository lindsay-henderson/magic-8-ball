import './App.css';
import ShakeBall from './Component/Shake';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main:'#4527a0',
  }}
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <ShakeBall/>
      </ThemeProvider>
    </div>
  );
}

export default App;
