import {
    REGISTRANDO_USUARIO,
    USUARIO_REGISTRADO_EXITO,
    USUARIO_REGISTRADO_ERROR,
    USERDATA,
    CLEANERROR,
} from '../types';

import axiosClient from '../config/axios';

export function createUserAction(user){
    return async (dispatch) => {

        dispatch( registerUser() );

        try {

            const headers = {'Content-Type': 'application/json'};
            const response = await axiosClient.post('/api/users', user, {
                headers: headers,
            });

            dispatch( usuarioRegistradoExito(response.data) );
            dispatch( getInfoUser() );

            
        } catch (error) {
            dispatch( usuarioRegistradoError(error.response.data.msg) )
        }
    }
}

const registerUser = () => ({
    type: REGISTRANDO_USUARIO
});

const usuarioRegistradoExito = usuario => ({
    type: USUARIO_REGISTRADO_EXITO,
    payload: usuario,
});

const usuarioRegistradoError = error => ({
    type: USUARIO_REGISTRADO_ERROR,
    payload: error
});

export function getInfoUser(){
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            const headers = {
                'Content-Type': 'application/json', 
                'x-auth-token': token,
            };

            const infoUsuario = await axiosClient.get('/api/auth', {
                headers: headers,
            });

            dispatch( getUserAuth(infoUsuario.data) );
        } catch (error) {
            const infoUsuario = null;
            dispatch( getUserAuth(infoUsuario) );
        }
    }
}

const getUserAuth = response => ({
    type: USERDATA,
    payload: response
});

export function setErrors(){
    return (dispatch) => {
        dispatch( cleanErrors() )
    }
}

const cleanErrors = () => ({
    type: CLEANERROR
});

