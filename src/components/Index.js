import React, { useState } from 'react';
import '../styles/styles.css'; 
const Index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div>
      {/* Menú de navegación */}
      <header>
        <div className="menu">
          <div className="logo-container">
            <img src="logo.png" alt="Logo" className="logo" />
          </div>
          <div>
            <nav>
              <div>
                <a href="registro.html" className="link" style={{ backgroundColor: 'rgb(192, 192, 192)' }}>
                  <img src="registro.png" alt="Registro" className="icon" />
                  <span className="title">Registro de usuarios</span>
                </a>
              </div>
              <a href="inventario.html" className="link" style={{ backgroundColor: 'rgb(192, 192, 192)' }}>
                <img src="inventario.png" alt="Inventario" className="icon" />
                <span className="title">Inventario</span>
              </a>
              <a href="facturacion.html" className="link" style={{ backgroundColor: 'rgb(192, 192, 192)' }}>
                <img src="factura.png" alt="Facturación" className="icon" />
                <span className="title">Facturación</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Formulario de registro de usuario */}
      <div className="login-container">
        <h2>Registrar Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Introduce tu nombre de usuario"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Introduce tu contraseña"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Rol</label>
            <select id="role" name="role" required>
              <option value="Administrador">Administrador</option>
              <option value="Usuario">Usuario</option>
              <option value="Cliente">Cliente</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="status">Estado</label>
            <select id="status" name="status" required>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
          <button type="submit" className="btn-login">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Index;
