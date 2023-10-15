import React from 'react'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const { nombre, propietario, email, alta, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm("Deseas eliminar este paciente?")
        if (respuesta) {
            eliminarPaciente(id)
        }
    }

  return (
      <div className='bg-white shadow-lg rounded-lg m-5 my-10 px-5 py-10 '>
          <p
              className=' text-gray-700 uppercase font-bold'>
              Nombre: {' '}
              <span className='font-normal normal-case '>{nombre}</span>
          </p>
          <p
              className=' text-gray-700 uppercase font-bold'>
              Propietario: {' '}
              <span className='font-normal normal-case '>{propietario}</span>
          </p>
          <p
              className=' text-gray-700 uppercase font-bold'>
              E-mail: {' '}
              <span className='font-normal normal-case '>{email}</span>
          </p>
          <p
              className=' text-gray-700 uppercase font-bold'>
              fecha de alta: {' '}
              <span className='font-normal normal-case '>{alta}</span>
          </p>
          <p
              className=' text-gray-700 uppercase font-bold'>
              sintomas: {' '}
              <span className='font-normal normal-case '>{sintomas}</span>
          </p>
          <div className='flex justify-between mt-10'>
            <button 
            type="button"
            className='py-2 px-4 mt-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold'
                  onClick={() => setPaciente(paciente)}
            >Editar
            </button>
              <button
              className='py-2 px-4 mt-5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold ml-5' 
              type="button"
              onClick={handleEliminar}
              >Eliminar
              </button>
          </div>
      </div>
  )
}

export default Paciente