import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import clienteAxios from './config/axios';

//Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {
  const [citas, setCitas] = useState([]);

  const consultaAPI = async () => {
    const pacientes = await clienteAxios.get('/pacientes');
    setCitas(pacientes.data);
  };

  useEffect(() => {
    consultaAPI();
    return () => {};
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Pacientes citas={citas} />
        </Route>
        <Route exact path='/nueva' component={NuevaCita} />
        <Route exact path='/cita/:id' component={Cita} />
      </Switch>
    </Router>
  );
}

export default App;
