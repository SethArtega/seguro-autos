import React from 'react'
import useCotizador from '../hooks/useCotizador'


const Error = () => {
    const { error } = useCotizador()
  return (
    <div className='border text-center border-red-400 bg-red-100 py-3 text-red-600 rounded'>
        <p>{error}</p> 
    </div>
  )
}

export default Error
