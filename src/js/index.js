// Importar React y ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Importar los estilos en el bundle de Webpack
import "../styles/index.css";

// Importar las dependencias de Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

// Definir el componente SimpleCounter que muestra el contador
function SimpleCounter(props) {
   return (
      <div className="contador">
         <div className="calendario">
            {/* Utilizar el ícono de Font Awesome */}
            <FontAwesomeIcon icon={faClock} style={{ color: "#01f411" }} />
         </div>
         {/* Mostrar las cifras del contador */}
         <div className="cuatro">{props.cuatro}</div>
         <div className="tres">{props.tres}</div>
         <div className="dos">{props.dos}</div>
         <div className="uno">{props.uno}</div>
      </div>
   );
}

// Inicializar el contador en 0
let counter = 0;

// Definir una función que se ejecutará cada segundo (1000 milisegundos)
setInterval(function() {
   // Calcular las cifras del contador
   let four = Math.floor(counter / 1000);
   let three = Math.floor((counter % 1000) / 100);
   let two = Math.floor((counter % 100) / 10);
   let one = Math.floor(counter % 10);

   // Renderizar el componente SimpleCounter con las cifras actualizadas
   ReactDOM.render(
      <SimpleCounter cuatro={four} tres={three} dos={two} uno={one} />,
      document.querySelector("#app")
   );

   // Incrementar el contador en 1 para el siguiente segundo
   counter++;
}, 1000);
