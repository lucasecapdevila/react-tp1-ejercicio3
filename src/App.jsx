import { Container } from 'react-bootstrap'
import './App.css'
import Saludo from './components/Saludo'
import Footer from './components/Footer'

function App() {
  const saludo = 'my friend'

  return (
    <>
    <Container className='my-4 mainPage'>
      <Saludo saludoProps={saludo} />
    </Container>

    <Footer />
    </>
  )
}

export default App
