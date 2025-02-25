// src/App.js
import React from "react";
import Login from "./components/Index";  // Importamos el componente Login
import "./styles/styles.css";  // Importamos los estilos

function App() {
  return (
    <div className="App">
      <Login />  {/* Mostramos el componente Login */}
    </div>
  );
}

export default App;
