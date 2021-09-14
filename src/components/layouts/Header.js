import React from 'react';
import Buscador from '../Buscador';
import HeaderCarrito from '../HeaderCarrito';
import {Link} from 'react-router-dom';


const Header = () => {
    return ( 
        <div className="site-header">
            <div className="header-middle pt-10 pb-10">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 logo-div">
                            <Link to={'/'}>
                                <h2>BookStore.</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom pb-10">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <Buscador 
                            
                            />
                        </div>
                        <div className="col-md-4">
                            <div className="main-navigation flex-lg-right">
                                <div className="cart-widget">
                                    <div className="login-block">
                                        <Link
                                            to={'/login'} 
                                            className="font-weight-bold"
                                        >Login</Link>
                                        <p>ó</p>
                                        <Link
                                            to={'/inicio-sesion'}
                                        >Registro</Link>
                                    </div>
                                    <HeaderCarrito 
                                    
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;
