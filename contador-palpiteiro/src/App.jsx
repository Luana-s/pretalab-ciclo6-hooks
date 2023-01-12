import "./App.css";
import Header from "./components/Header";
import Contador from "./components/Contador";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header nomeGrupo="Grupo Ada!" integrantes="Lis, Si e Mands" />
      <Contador />
      <Footer />
    </div>
  );
}

export default App;
