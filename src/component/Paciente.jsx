import React from 'react'

const Paciente = () => {
  return (
      <div className='bg-white shadow-lg rounded-lg m-5 my-10 px-5 py-10 '>
          <p
              className=' text-gray-700 uppercase font-bold'>
              Nombre: {' '}
              <span className='font-normal normal-case '>chicho</span>
          </p>
          <p
              className=' text-gray-700 uppercase font-bold'>
              Propietario: {' '}
              <span className='font-normal normal-case '>Carlos</span>
          </p>
          <p
              className=' text-gray-700 uppercase font-bold'>
              E-mail: {' '}
              <span className='font-normal normal-case '>correo@correo.com</span>
          </p>
          <p
              className=' text-gray-700 uppercase font-bold'>
              fecha de alta: {' '}
              <span className='font-normal normal-case '>25 diciembre de 2020</span>
          </p>
          <p
              className=' text-gray-700 uppercase font-bold'>
              sintomas: {' '}
              <span className='font-normal normal-case '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequatur eaque ullam. Doloribus velit hic totam culpa quae quasi corporis, ut asperiores cum obcaecati fugit exercitationem accusantium adipisci repellendus ducimus!</span>
          </p>

      </div>
  )
}

export default Paciente