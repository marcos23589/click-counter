import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {
  let [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reinicio = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="contenedor">Contador de clicks en React</div>
      <div className="contenedor-principal">
        
        <Contador numClicks={numClicks} />

        <Boton
          texto="incrementar"
          esBotonClick={true}
          manejadorClick={manejarClick}
        />

        <Boton
          texto="reiniciar"
          esBotonClick={false}
          manejadorClick={reinicio}
        />
      </div>
    </div>
  );
}

export default App;
