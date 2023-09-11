import "./App.css";
import FunkcijskaKomponenta from "./FunkcijskaKomponenta";
import KlasnaKomponenta from "./KlasnaKomponenta";
function App() {
  return (
    <>
      <div>
        <FunkcijskaKomponenta title="funkcijska komponenta" />
        <KlasnaKomponenta title="Klasna komponenta" />
      </div>
    </>
  );
}

export default App;
