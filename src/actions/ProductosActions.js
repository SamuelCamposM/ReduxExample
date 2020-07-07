//axios
import clienteAxios from '../config/axios';
//dependencias
import Swal from 'sweetalert2';
//types
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    OBTENER_PRODUCTOS,
OBTENER_PRODUCTOS_ERROR,
OBTENER_PRODUCTOS_EXITO,
PRODUCTO_ELIMINAR,
PRODUCTO_ELIMINAR_EXITO,
PRODUCTO_ELIMINAR_ERROR,
PRODUCTO_EDITAR,
PRODUCTO_EDITAR_EXITO,
PRODUCTO_EDITAR_ERROR,
COMENZAR_EDICION,
} from '../types/index';



//crear nuevo producto 
export function crearNuevoProducto(producto) {
    return  async(dispatch) => {
        dispatch(agregarProducto()) 
        try {
            //insertar en la API
          await  clienteAxios.post('/productos', producto)
            //si todo sale bien actualizar el state
            dispatch(agregarProductoExito(producto))

            //alerta
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            )
        } catch (error) {

            console.log(error);
               
          dispatch(agregarProductoError(true))

          Swal.fire({
              icon: 'error',
              title: 'Hubo un error',
              text: 'Hubo un error intenta de nuevo'
          })
                }
            }
}


const agregarProducto= () =>({
    type: AGREGAR_PRODUCTO,
    payload: true
    
})

//si el producto se guarda exitosamente
const agregarProductoExito = producto => ({
    type:AGREGAR_PRODUCTO_EXITO,
    payload:producto
})

//si hubo un error
const agregarProductoError = Error => ({
    type:AGREGAR_PRODUCTO_ERROR ,
    payload : Error
})

//funcion que obtine los grupos
export function obtenerProductosAction() {
    
    return async (dispatch) => {
        dispatch(obtenerProductos())

        try {
     
                const respuesta = await clienteAxios.get('/productos')
            dispatch(obtenerProductosExito(respuesta.data))    
          
            
        } catch (error) {
            dispatch(obtenerProductosError(true))
        }
    }
}

const obtenerProductos = () => ({
    type:OBTENER_PRODUCTOS,
    payload: true

})

 
const obtenerProductosExito = Productos => ({
    type : OBTENER_PRODUCTOS_EXITO,
    payload: Productos
})


const obtenerProductosError  = error => ({
    type : OBTENER_PRODUCTOS_ERROR,
    payload: error
})




//SELECCIONA Y ELIMINA EL PRODUCTO
export function borrarProductoAction(id){
    return async (dispatch) => {
     dispatch(obtenerProductoEliminar(id))

        try {
            const resultado  = await clienteAxios.delete(`/productos/${id}`)
            console.log(resultado);

            //si se elimina mostrar alerta
            Swal.fire(
                '¡Eliminado!',
                'Tu producto ha sido eliminado.',
                'success'
              )
            dispatch(eliminarProductoExito(id))
        } catch (error) {
              //si se elimina mostrar alerta
            
            dispatch(eliminarProductoError())
        }

    }
    
}


 const obtenerProductoEliminar = id => ({
    type: PRODUCTO_ELIMINAR,
    payload : id
})

const eliminarProductoExito = (id) => ({
 
    type: PRODUCTO_ELIMINAR_EXITO,
    payload: id
})


const eliminarProductoError = () => ({
 
    type: PRODUCTO_ELIMINAR_ERROR,
    payload: true
})

//funcion para editar 
export function productoEditarAccion(producto){
    return(dispatch) => {
        dispatch(obtenerProductoEditar(producto))

    }
} 

const obtenerProductoEditar = producto => ({
    type :PRODUCTO_EDITAR,
    payload: producto
})

//edita un registro en la api

export function editarProductoAccion(producto) {
    return  async (dispatch) => {
       
        dispatch(editarProducto(producto))
        try {
             await clienteAxios.put(`/productos/${producto.id}`, producto)
            dispatch(editarExito(producto))
            
        } catch (error) {
            dispatch(editarError(producto))

            
        }
    }
}

const  editarProducto = producto => ({
 
    type:COMENZAR_EDICION, 
    payload: producto
})
 
const editarExito = producto  => ({
    type:PRODUCTO_EDITAR_EXITO,
    payload: producto
})

const editarError = ( ) => ({
    type: PRODUCTO_EDITAR_ERROR,
    payload: true
})