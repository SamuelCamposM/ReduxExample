//cada reducer tiene su propio state


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
} from "../types/index";

const initialState = {
  productos: [],
  error: false,
  loading: false,
  productoEliminado: null,
  productoEditar: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_PRODUCTOS : 
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };

    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
        error: false,
      };
      case OBTENER_PRODUCTOS_ERROR:
    case AGREGAR_PRODUCTO_ERROR:
      case PRODUCTO_ELIMINAR_ERROR:
        case PRODUCTO_EDITAR_ERROR:
      return {
        ...state,
        
        error: action.payload,
        loading: false,
        
        
      };
      
      case OBTENER_PRODUCTOS_EXITO:
        return {
          ...state,
          error: false,
          loading: false,
          productos: action.payload
          
        }

        case PRODUCTO_ELIMINAR:
          return {
            ...state,
            productoEliminado: action.payload
          }
          case PRODUCTO_ELIMINAR_EXITO:
            return{
              ...state,
              productos: state.productos.filter(producto =>  producto.id !== action.payload),
              productoEliminado: null

            }
            case PRODUCTO_EDITAR:
              return {
                ...state,
                productoEditar: action.payload
              }
              case  PRODUCTO_EDITAR_EXITO: 
              return{
                ...state, 
                productoEditar: null,
                productos : state.productos.map(producto =>   
                   producto.id === action.payload.id
                  ? producto = action.payload : producto  
                   )
              }
    default:
      return state;
  }
}
