import { useState } from 'react'
import { Button } from 'react-bootstrap'

const Saludo = ({saludoProps}) => {
  const [mensaje, setMensaje] = useState('')

  return (
    <section className='text-center'>
      <h1 className='my-4'>Hello {saludoProps} {mensaje}!</h1>
      <Button onClick={() => setMensaje('(from changed state)')} variant='success'>Hazme click !</Button>
    </section>
  )
}

export default Saludo