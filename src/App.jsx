import {useState, useEffect } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Formulario from "./component/Formulario";
import ListadoPacientes from "./component/ListadoPacientes";



function App() {
  const [pacientes, setPacientes] = useState([]);
  return (
    <>
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        />
        <ListadoPacientes />
      </div>
      <Footer />
    </>
  )
}

export default App;
