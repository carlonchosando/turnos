import { useState, useEffect } from 'react';

const Formulario = () => {
  // State para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  // fin del state para los campos del formulario

  // State para el error, falta de campos
  const [error, setError] = useState(false);

  
  const handleSubmit = e => {
    e.preventDefault();// prevenir la accion por defecto del formulario

    // Validacion de los campos del formulario
    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      setError(true)
      return;
    }
    setError(false)    
  };// fin de la validacion de los campos del formulario


  return (
    //encabezado
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 mb-10 text-center'>
        Añade Pacientes y {' '}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-lg rounded-lg py-10 px-5 mt-10 mx-5'>          
        
        {error &&  // Mostrar el mensaje de error        
         <div className='bg-red-700  text-center text-xl font-bold p-2 rounded-lg
         shadow-lg mb-5 text-white' >
            <p>Todos los campos son obligatorios !</p>
         </div>
         }

        <div className='mb-5'>
          <label
            htmlFor='nombre'
            className='block text-gray-700 uppercase font-bold'>
            Mascota
          </label>
          <input
            id='nombre'
            type='text'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Ingrese Nombre de la Mascota'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
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
            placeholder='Nombre del Propietario'
            value={propietario}
            onChange={e => setPropietario(e.target.value)}
          />
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
            placeholder='correo@correo.com'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />


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
            value={alta}
            onChange={e => setAlta(e.target.value)}
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
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
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
