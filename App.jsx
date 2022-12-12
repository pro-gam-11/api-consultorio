import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrearCuenta from './paginas/auth/CrearCuenta';
import Login from './paginas/auth/Login';
import AgendaCitasAdmin from './paginas/citas_medicas/AgendaCitasAdmin';
import AgendaCitasCrear from './paginas/citas_medicas/AgendaCitasCrear';
import AgendaCitasEditar from './paginas/citas_medicas/AgendaCitasEditar';
import MisCitasAdmin from './paginas/citas_medicas/MisCitasAdmin';
import ReservarCitasAdmin from './paginas/citas_medicas/ReservarCitasAdmin';
import CiudadesAdmin from './paginas/configuracion/CiudadesAdmin';
import CiudadesCrear from './paginas/configuracion/CiudadesCrear';
import CiudadesEditar from './paginas/configuracion/CiudadesEditar';
import EspecialidadesAdmin from './paginas/configuracion/EspecialidadesAdmin';
import EspecialidadesCrear from './paginas/configuracion/EspecialidadesCrear';
import EspecialidadesEditar from './paginas/configuracion/EspecialidadesEditar';
import RolesAdmin from './paginas/configuracion/RolesAdmin';
import RolesCrear from './paginas/configuracion/RolesCrear';
import RolesEditar from './paginas/configuracion/RolesEditar';
import UsuariosAdmin from './paginas/configuracion/UsuariosAdmin';
import UsuariosCrear from './paginas/configuracion/UsuariosCrear';
import UsuariosEditar from './paginas/configuracion/UsuariosEditar';
import DashBoard from './paginas/DashBoard';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/crear-cuenta' exact element={<CrearCuenta />} />
          <Route path='/dashboard' exact element={<DashBoard />} />
          <Route path='/roles-admin' exact element={<RolesAdmin />} />
          <Route path='/roles-crear' exact element={<RolesCrear />} />
          <Route path='/roles-editar/:id' exact element={<RolesEditar />} />
          <Route path='/ciudades-admin' exact element={<CiudadesAdmin />} />
          <Route path='/ciudades-crear' exact element={<CiudadesCrear />} />
          <Route path='/ciudades-editar/:id' exact element={<CiudadesEditar />} />
          <Route path='/especialidades-admin' exact element={<EspecialidadesAdmin />} />
          <Route path='/especialidades-crear' exact element={<EspecialidadesCrear />} />
          <Route path='/especialidades-editar/:id' exact element={<EspecialidadesEditar />} />
          <Route path='/usuarios-admin' exact element={<UsuariosAdmin />} />
          <Route path='/usuarios-crear' exact element={<UsuariosCrear />} />
          <Route path='/usuarios-editar/:id' exact element={<UsuariosEditar />} />
          <Route path='/agenda-citas-admin' exact element={<AgendaCitasAdmin />} />
          <Route path='/agenda-citas-crear' exact element={<AgendaCitasCrear />} />
          <Route path='/agenda-citas-editar/:id' exact element={<AgendaCitasEditar />} />
          <Route path='/reservar-citas-admin' exact element={<ReservarCitasAdmin />} />
          <Route path='/mis-citas-admin' exact element={<MisCitasAdmin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
