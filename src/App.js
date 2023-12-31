import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

import Almacen from './Components/Almacen';
import Clientes from './Components/Clientes';
import Compras from './Components/Compras';
import Empleados from './Components/Empleados';
import Productos from './Components/Productos';
import Proveedores from './Components/Proveedores';
import Sedes from './Components/Sedes';
import Ventas from './Components/Ventas';

function App() {
  return (
    <Fragment>
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to='/'>
              <div>
                <p className="title">Negocio-Operativo</p>
                <div className="wrapper">
                </div>
              </div>
            </Link>
            <div>
  <div>
    <ul className="menu-list">
      <li>
        <Link to='/Almacen'>
          <button>Almacen</button>
        </Link>
      </li>
      <li>
        <Link to='/Clientes'>
          <button>Clientes</button>
        </Link>
      </li>
      <li>
        <Link to='/Compras'>
          <button>Compras</button>
        </Link>
      </li>
      <li>
        <Link to='/Empleados'>
          <button>Empleados</button>
        </Link>
      </li>
      <li>
        <Link to='/Productos'>
          <button>Productos</button>
        </Link>
      </li>
      <li>
        <Link to='/Proveedores'>
          <button>Proveedores</button>
        </Link>
      </li>
      <li>
        <Link to='/Sedes'>
          <button>Sedes</button>
        </Link>
      </li>
      <li>
        <Link to='/Ventas'>
          <button>Ventas</button>
        </Link>
      </li>
    </ul>
  </div>
</div>


            <Routes>
              <Route path='/Almacen' element={<Almacen />} />
              <Route path='/Clientes' element={<Clientes />} />
              <Route path='/Compras' element={<Compras />} />
              <Route path='/Empleados' element={<Empleados />} />
              <Route path='/Productos' element={<Productos />} />
              <Route path='/Proveedores' element={<Proveedores />} />
              <Route path='/Sedes' element={<Sedes />} />
              <Route path='/Ventas' element={<Ventas />} />
              <Route path='/' element={<div className='imagen'><img src='https://www.ceupe.com/images/easyblog_articles/3089/b2ap3_amp_que-es-una-empresa-concepto-definicion.jpg' /></div>} />
            </Routes>

            <footer className="footer">
              <div className="container">
                <div className="footer-content">
                  <p>&copy; 2023 Zuluaga1111. Todos los derechos reservados.</p>
                  <ul className="footer-links">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="https://github.com/sbstzuluaga1111/negocio-operativo-Pre-Filtro-">Proyecto</a></li>
                    <li><a href="https://github.com/sbstzuluaga1111">Contacto</a></li>
                  </ul>
                </div>
              </div>
            </footer>

          </header>
        </div>
      </Router>         
    </Fragment>
  );
}

export default App;
