//dependencias
import React, { useState } from 'react'


import {useDispatch , useSelector } from 'react-redux'
//importando funciones
//actions de Redux 
import  { crearNuevoProducto } from '../actions/ProductosActions'
import { mostrarAlertaAction } from '../actions/AlertaActions'



const NuevoProducto = ({history}) => {
//state del componente

const [nombre , setNombre] = useState('');
const [ precio , setPrecio ] = useState(0)

//utiñozar dispatcg y este te crea una funcion 
 const dispatch = useDispatch()
//obteniendo datos de redux
const cargando = useSelector(state=>state.productos.loading )
const error = useSelector(state=>state.productos.error ) 
const alerta = useSelector(state=>state.alerta.alerta )

console.log(cargando);

//mandar a llamar el action de producto actions
const agregarProducto = producto => dispatch( crearNuevoProducto(producto) )

  //cuando el usuario haga submit 
  const submitNuevoProducto = e => {
    e.preventDefault();
    
      //validar form
      if (nombre.trim()=== '' || precio <= 0 ) {
        const alerta = {
          msg : 'Ambos campos son obligatorios',
          classes : 'alert alert-danger text-center text-uppercase p3'
        }
        console.log(alerta)   ;
        
            dispatch(mostrarAlertaAction(alerta))
        return
      }

    agregarProducto({
      nombre,
      precio
    });

    //redireccionar 
    history.push('/');

  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Producto
            </h2>
            { alerta ? <p className={alerta.classes}> {alerta.msg} </p> : null }
            <form 
            onSubmit={submitNuevoProducto}
            >
              <div className="form-group">
                <label htmlFor="nombre">Nombre producto</label>
                <input 
                type="text"
                 className="form-control"
                 placeholder="nombre producto"
                 name="nombre"
                 value={nombre}
                 onChange={e => setNombre(e.target.value)}
                />

              </div>

              <div className="form-group">
                <label htmlFor="nombre">Precio producto.</label>
                <input 
                type="number"
                 className="form-control"
                 placeholder="Precio producto"
                 name="precio"
                 value={precio}
                 onChange={e => setPrecio(Number(e.target.value))}
                />

              </div>

<button 
type="submit"
className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
    Agregar
</button>
            </form>

{cargando ? <p>cargando</p> :null }
{error ? <p className="alert alert-danger p2 mt-4">hubo un error</p> : null }
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
