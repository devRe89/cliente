import React from 'react';
import {Link} from 'react-router-dom';

const Registro = () => {
    return ( 
        <div className="container content-form-login">
            <div className="row justify-content-md-center">
                <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb--30 mb-lg--0">
                    <form>
                        <div className="login-form">
                            <h4 className="login-title">Crear una cuenta</h4>
                            <div className="row">
                                <div className="col-md-12 col-12 mb--15">
                                    <label for="email">Full Name</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="text" id="name"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="col-12 mb--20">
                                    <label for="email">Email</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="email" 
                                        id="email" 
                                        placeholder="Enter Your Email Address Here.."
                                    />
                                </div>
                                <div className="col-lg-6 mb--20">
                                    <label for="password">Password</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="password" 
                                        id="password" 
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="col-lg-6 mb--20">
                                    <label for="password">Repeat Password</label>
                                    <input 
                                        className="mb-0 form-control" 
                                        type="password" 
                                        id="repeat-password" 
                                        placeholder="Repeat your password"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <a 
                                        href="!#" 
                                        className="btn btn-outlined"
                                    >Register</a>
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
