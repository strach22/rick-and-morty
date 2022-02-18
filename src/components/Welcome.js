import React, { useState,useEffect } from "react";

export default function Welcome(props) {
  const [counter, setCounter] = useState(0);
  const [semaforo, setSemaforo] = useState(false);
  useEffect(() => {
    console.log(semaforo)
  }, [semaforo])
  
  const contar = () => {
    setCounter(counter + 1);
    setSemaforo(!semaforo);
  };
  return (
    <div>
      <p>Hola {props.message}</p>
      <p>Contador de React con Hooks</p>
      <button type="submit" onClick={contar}>
        Sumar Contador
      </button>
      <p>{counter}</p>
      <p>El semáforo es de color: {semaforo ? "rojo" : "verde"}</p>
    </div>
  );
}
