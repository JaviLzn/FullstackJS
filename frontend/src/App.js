import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import clienteAxios from './config/axios';

//Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const consultaAPI = async () => {
      const pacientes = await clienteAxios.get('/pacientes');
      setCitas(pacientes.data);
    };
    consultaAPI();
    return () => {};
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Pacientes} />
        <Route exact path='/nueva' component={NuevaCita} />
        <Route exact path='/cita/:id' component={Cita} />
      </Switch>
    </Router>
  );
}

export default App;
