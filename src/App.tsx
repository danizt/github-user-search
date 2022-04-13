import './styles/site.css'
import { ThemeProvider } from 'react-jss'
import { Home } from './components/home/home'
import { officeUITheme } from './styles/officeUITheme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={officeUITheme}>
        <Home />
      </ThemeProvider>
    </div>
  )
}

export default App
