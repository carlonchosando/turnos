import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 mb-10 text-center'>
        Añade Pacientes y {' '}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form className='bg-white shadow-lg rounded-lg py-10 px-5 mt-10'>
        <div className='mb-5'>
          <label
            htmlFor='nombre'
            className='block text-gray-700 uppercase font-bold'>
            Nombre de la Mascota
          </label>
          <input
            id='nombre'
            type='text'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'            
            placeholder='Nombre de la Mascota' />
        </div>

        <div className='mb-5'>
        <label
            htmlFor='propietario'
            className='block text-gray-700 uppercase font-bold'>
            Nombre del Propietario
          </label>
          <input
            id='propietario'
            type='text'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'            
            placeholder='Nombre del Propietario' />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 uppercase font-bold'>
            e-mail
          </label>
          <input
            id='email'
            type='email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='correo@correo.com' />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='alta'
            className='block text-gray-700 uppercase font-bold'>
            Alta
          </label>
          <input
            id='alta'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='sintomas'
            className='block text-gray-700 uppercase font-bold'>
            Síntomas
          </label>
          <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Describe los síntomas'
          />          
        </div>

        <input 
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-800 cursor-pointer transition-all'
          value='Agregar Paciente'
        />
      </form>
    </div>
  )
}

export default Formulario;
