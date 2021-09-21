import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {createUserAction, setErrors} from '../actions/usersActions';

const Registro = ({history}) => {

    const [user, registerUser] = useState({
        nombre: "",
        email: "",
        tipo: "",
        nickname: "",
        password: "",
        confirmar: ""
    });

    const [alert, actAlert] = useState(0);

    const {nombre, email, tipo, nickname, password, confirmar} = user;

    const mensaje = useSelector(state => state.userState.mensajeError);
    const status = useSelector(state => state.userState.statusError);
    const autenticado = useSelector(state => state.userState.usuarioAutenticado);
    const rol = useSelector(state => state.userState.rol);


    const dispatch = useDispatch();

    const register = newUser => dispatch( createUserAction(newUser) );

    useEffect(() =>{

        //Limpiar error al llenar fomulario
        setTimeout(() =>{
            actAlert(0);
        }, 4000);

        //Limpiar mensaje del servidor
        if(status){
            setTimeout(() =>{
                dispatch( setErrors() );
            }, 4000);
        }

        //Redireccionar si esta autenticado correctamente.
        if(autenticado){

            if(rol === "Normal"){
                history.push("/");
            }else{
                history.push("/mi-cuenta");
            }
        }
    },[alert, status, autenticado, rol])

    const onChangeFields = e => {
        registerUser({
            ...user,
            [e.target.name] : e.target.value
        });
    }

    const onSubmitUser = e => {
        e.preventDefault();

        //Validate Fields
        if(
            nombre.trim() === '' || 
            email.trim() === '' ||
            tipo.trim() === '' ||
            nickname.trim() === '' ||
            password.trim() === '' ||
            confirmar.trim() === ''
        ){
            actAlert(1);
            return;
        }
        
        if ( password.length < 6 || confirmar.length < 6 ){
            actAlert(3)
            return;
        }

        if (password.trim() !== confirmar.trim()){
            actAlert(2);
            return;
        }


        register(user);

        registerUser({
            nombre: "",
            email: "",
            tipo: "",
            nickname: "",
            password: "",
            confirmar: ""
        });
        actAlert(0);

    }

    let msg = "";

    if (alert === 1){
        msg = "Todos los campos son requeridos";
    }else if (alert === 2){
        msg = "Las contraseñas no coinciden"
    }else if (alert === 3){
        msg = "EL nimino de caracteres para las contraseñas es de 6";
    }

    return ( 
        <div className="container content-form-login">
            <div className="row justify-content-md-center">
                <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb--30 mb-lg--0">
                    <form
                        onSubmit={onSubmitUser}
                    >
                        <div className="login-form">
                            <h4 className="login-title">Crear una cuenta</h4>
                            <div className="row">
                                <div className="col-md-12">
                                    {status ? <p className="alert alert-danger text-center"> <strong>{mensaje}</strong> </p> : null}
                                </div>
                                <div className="col-md-12">
                                    {alert !== 0 ? <p className="alert alert-danger text-center"> <strong>{msg}</strong> </p> : null}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-12 mb--15">
                                    <label htmlFor="nombre">Nombre completo</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="text" 
                                        name="nombre"
                                        placeholder="Juan, Pedro, Ana...."
                                        onChange={onChangeFields}
                                    />
                                </div>
                                <div className="col-12 mb--20">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="email" 
                                        name="email" 
                                        placeholder="email@email.com"
                                        onChange={onChangeFields}
                                    />
                                </div>
                                <div className="col-6 mb--20">
                                    <label htmlFor="tipo">Yo voy a ?</label>
                                    <select 
                                        className="nice-select"
                                        name="tipo"
                                        onChange={onChangeFields}
                                    >
                                        <option value="">Selecciona</option>
                                        <option value="Normal">Comprar</option>
                                        <option value="Vendedor">Vender y comprar</option>
                                    </select>
                                </div>
                                <div className="col-6 mb--20">
                                    <label htmlFor="nickname">NickName</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="text" 
                                        name="nickname" 
                                        placeholder="Ej: Juan89W"
                                        onChange={onChangeFields}
                                    />
                                </div>
                                <div className="col-lg-6 mb--20">
                                    <label htmlFor="password">Contraseña</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="password" 
                                        name="password" 
                                        placeholder="*******"
                                        onChange={onChangeFields}
                                    />
                                </div>
                                <div className="col-lg-6 mb--20">
                                    <label htmlFor="confirmar">Repita la contraseña</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="password" 
                                        name="confirmar" 
                                        placeholder="*******"
                                        onChange={onChangeFields}
                                    />
                                </div>
                                <div className="col-md-12 div-btn-submit">
                                    <button
                                        type="submit"
                                        className="btn btn-outlined"
                                    >Registrarse</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="col-md-12 mt--15">
                        <Link to={'/login'} className="btn btn-outlined">Iniciar Sesión</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Registro;
