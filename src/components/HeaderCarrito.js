import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const HeaderCarrito = () => {
    return ( 
        <div className="cart-block">
            <Icon.Cart className="color-icon" />
            <span className="text-number">
                1
            </span>
            <div className="cart-total">
                <span className="text-item">
                    Carrito
                </span>
                <span className="price">
                    $ 0.00
                    <i className="fas fa-chevron-down"></i>
                </span>
            </div>
            <div className="cart-dropdown-block">
                <div className=" single-cart-block ">
                    <div className="cart-product">
                        <a href="product-details.html" className="image">
                            
                        </a>
                        <div className="content">
                            <h3 className="title"><a href="product-details.html">Kodak PIXPRO
                                    Astro Zoom AZ421 16 MP</a>
                            </h3>
                            <p className="price"><span className="qty">1 ×</span> $ 87.34</p>
                            <button className="cross-btn"><i className="fas fa-times"></i></button>
                        </div>
                    </div>
                </div>
                <div className=" single-cart-block ">
                    <div className="btn-block">
                        <a href="!#" className="btn">Ver carrito <i className="fas fa-chevron-right"></i></a>
                        <a href="!#" className="btn btn--primary">Pagar <i className="fas fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HeaderCarrito;
