import React from 'react'

const ListadoPacientes = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5' >
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className='text-lg mt-5 mb-10 text-center'>
        Administra tus {' '}
        <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
      </p>
      <div className='bg-white shadow-lg rounded-lg py-10 px-5 mt-10'>        
          <label           
            className=' text-gray-700 uppercase font-bold'>
            Nombre: {' '}
            <p className=' text-normal '>Carlos</p>
          </label>
      </div>

    </div>

  )
}

export default ListadoPacientes
