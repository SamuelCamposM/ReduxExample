//dependencias
import React, { useState , useEffect} from 'react'

///para traer el state useSelector
import { useDispatch , useSelector} from 'react-redux'
import {  useHistory} from 'react-router-dom'
///para traer una funcion del actions
import { editarProductoAccion} from '../actions/ProductosActions'
const EditarProducto = () => {
  const dispatch = useDispatch()
  const redireccionar = useHistory()
  //producto a editar
 
  const [producto, setProducto ] = useState({
    nombre:'',
    precio: 0
  })
  
  const productoEditar = useSelector(state => state.productos.productoEditar)


  useEffect(() => {
    setProducto(productoEditar)
  }, [productoEditar])
  //llenar el state automaticamente
  const { nombre ,precio  } = producto
  

  const setDatosForm = e => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }
  const submitEditar = e => {
    e.preventDefault();
    
   dispatch( editarProductoAccion(producto))
   redireccionar.push('/')
  } 

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <div className="text-center mb-4 font-weight-bold">
              Agregar Producto
            </div>
            <form
            onSubmit={submitEditar}
            action="">
              <div className="form-group">
                <label htmlFor="nombre">Nombre producto</label>
                <input 
                type="text"
                 className="form-control"
                 placeholder="nombre producto"
                 name="nombre"
                 value={nombre}
                 onChange={setDatosForm}
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
                 onChange={setDatosForm}
                />

              </div>

<button 
type="submit"
className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
    Agregar
</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
