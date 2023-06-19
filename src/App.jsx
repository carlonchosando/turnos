import Header from "./component/Header";
import Footer from "./component/Footer";
import Formulario from "./component/Formulario";
import ListadoPacientes from "./component/ListadoPacientes";

const [pacientes, setPacientes] = useState([]);

function App() {

  return (
    <>
      <Header />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
      <Footer />
    </>
  )
}

export default App;
