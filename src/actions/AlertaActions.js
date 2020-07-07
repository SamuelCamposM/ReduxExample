import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types/index';

//muestra una alerta 

export function mostrarAlertaAction(alerta) {
    return(dispatch)=> {
        dispatch(mostrarAlertaError(alerta))
        console.log("alerta", alerta)

        setTimeout(()=> {
     dispatch(ocultarAlerta(null))
            }, 3000)
    }
}

const mostrarAlertaError = alerta =>({
    type: MOSTRAR_ALERTA,
    payload: alerta
    
})

const ocultarAlerta = (valorNull ) => ({
 type:OCULTAR_ALERTA,
 payload: valorNull
})