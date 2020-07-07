//dependencias
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

//componentes
import Header from './components/Header'
import Productos from './components/Productos'
import NuevoProducto from './components/NuevoProducto'
import EditarProducto from './components/EditarProducto'
//redux
import { Provider  } from 'react-redux'
import store from './store'




function App() {
  return (
    <Router >
      <Provider store={store}>
<Header />
<div className="container">
  <div className="mt-5">
    
{/*  todo lo que este dentro del switch es el layout */}
  <Switch > 
    <Route exact path="/" component={Productos} /> 
    <Route exact path="/productos/nuevo" component={NuevoProducto} /> 
    <Route exact path="/productos/editar/:id" component={EditarProducto} /> 
     </Switch>
     </div>
</div>
</Provider>
    </Router>
  );
}


export default App;
