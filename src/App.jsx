import './App.css'
import Saludo from './components/Saludo'

function App() {
  const saludo = 'my friend'

  return (
    <>
      <Saludo saludoProps={saludo} />
    </>
  )
}

export default App
