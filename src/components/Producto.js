//dependencias
import React from "react";
import {  useHistory } from "react-router-dom";

import Swal from 'sweetalert2'
//REDUx
import { useDispatch } from "react-redux";
import { borrarProductoAction , productoEditarAccion } from "../actions/ProductosActions";

const Producto = ({ producto }) => {
  //obtener funcion del actoin
  const dispatch = useDispatch();
//funcion que manda a llamar el history
const history =useHistory(); 
  //confirmar si desea eliminarlo
  const confirmarEliminar = (id) => {

    Swal.fire({
        title: '¿Estas seguro?',
        text: "¡Un producto eliminado no se puede recuperar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si ,eliminar!'
      }).then((result) => {
        if (result.value) {
            dispatch(borrarProductoAction(id));
         
        };
      })




  };

  const { nombre, precio, id } = producto;

  // funcion que redirige de forma programada

  const redireccionar = producto => {
    dispatch(productoEditarAccion(producto))
     history.push(`/productos/editar/${producto.id}`)
  }

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        {" "}
        <span className="font-weight-bold"> $ {precio} </span>
      </td>
      <td className="acciones">
        <button 
        type="button"
        className="btn btn-primary mr-2"
        onClick={()=> redireccionar(producto)}
        > Editar </button>

        <button
          className="btn btn-danger mx-4"
          onClick={() => confirmarEliminar(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
