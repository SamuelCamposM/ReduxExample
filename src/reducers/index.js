import { combineReducers } from 'redux'
//reducer
import ProductosReducer from './ProductosReducer';
//importando otro reducer
import AlertaReducer from './AlertaReducer'

export default combineReducers({
    productos: ProductosReducer ,
    alerta : AlertaReducer

})
