import {
    REGISTRANDO_USUARIO,
    USUARIO_REGISTRADO_EXITO,
    USUARIO_REGISTRADO_ERROR,
    USERDATA,
    CLEANERROR
} from '../types';

const initialState = {
    token: localStorage.getItem('token'),
    usuarioAutenticado: false,
    cargando: false,
    infoUsuario: null,
    statusError: false,
    mensajeError: null,
    rol: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch(action.type){
        case REGISTRANDO_USUARIO:
            return{
                ...state,
                cargando: true
            }
        case USUARIO_REGISTRADO_EXITO:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                cargando: false,
                usuarioAutenticado: true,
                statusError: false,
                mensajeError: null,  
            }    
        case USUARIO_REGISTRADO_ERROR:
            return{
                ...state,
                cargando: false,
                statusError: true,
                mensajeError: action.payload,
            }
        case USERDATA: 
            return{
                ...state,
                infoUsuario: action.payload.infoUser,
                rol: action.payload.infoUser.tipo
            }
        case CLEANERROR: 
            return{
                ...state,
                statusError: false,
                mensajeError: null,
            }          
        default:
            return state
    }
}