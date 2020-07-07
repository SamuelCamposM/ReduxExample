import React ,{Fragment , useEffect}  from 'react'

//redux
import {useSelector , useDispatch} from 'react-redux'
import { obtenerProductosAction } from '../actions/ProductosActions'
//componentes
import Producto from './Producto'
const Productos = () => {
    


const  dispatch = useDispatch();

useEffect(() => {
    //consultar la apui
    const cargarProductos = () => dispatch(obtenerProductosAction())
    cargarProductos();
 //eslint-disable-next-line
}, [])

//obtener datos del state
const productos = useSelector(state=> state.productos.productos);
const loading = useSelector(state=> state.productos.loading)
const error = useSelector(state=> state.productos.error)


    return ( <Fragment>
        <h2 className="text-center my-5">Listado de productos</h2>
        {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">hubo un error</p>:
        null
          }

          {loading ? <p className="text-center">Cargando</p> : null  }
        <table className="table max">
            <thead className="bg-primary table-dark">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                 { productos.length === 0 ? null:
                  
               
                       productos.map(producto => (
                        <Producto
                        producto={producto}
                        key={producto.id}
                        /> 
                       ))

                }
            </tbody>
        </table>
        </Fragment> );
}
 
export default Productos;