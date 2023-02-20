import Header from "./component/Header";
import Footer from "./component/Footer";
import Formulario from "./component/Formulario";
import ListadoPacientes from "./component/ListadoPacientes";


function App() {  

  return (
    <div className="conteiner mx-">
      <Header/>

      <Formulario/>
      <ListadoPacientes/>
      <Footer/>
    </div>
  )
}

export default App;
