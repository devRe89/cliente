import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    return ( 
        <div className="container content-form-login">
            <div className="row justify-content-md-center">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                    <form>
                        <div className="login-form">
                            <div className="row">
                                <div className="col-md-12 col-12 mb--15">
                                    <label for="email">Correo Electronico</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="email" 
                                        id="email1"
                                        placeholder="Enter you email address here..." 
                                    />
                                </div>
                                <div className="col-12 mb--20">
                                    <label for="password">Contraseña</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="password" 
                                        id="login-password" 
                                        placeholder="Enter your password" 
                                    />
                                </div>
                                <div className="col-md-12 div-btn-submit">
                                    <button 
                                        type="submit"
                                        className="btn btn-outlined"
                                    >Iniciar Sesión</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="col-md-12 mt--15">
                        <Link to={'/inicio-sesion'} className="btn btn-outlined">Registrarse</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Login;