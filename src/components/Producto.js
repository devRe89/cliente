import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const Producto = ({producto}) => {
    return ( 
        <div className="single-slide">
            <div className="product-card">
                <div className="product-header">
                    <h3><a href="product-details.html">{producto.nombre}</a></h3>
                </div>
                <div className="product-card--body">
                    <div className="card-image">
                        <img src={producto.portada} alt=""/>
                        <div className="hover-contents">
                            <a href="product-details.html" className="hover-image">
                                <img src={producto.hover} alt=""/>
                            </a>
                            <div className="hover-btns">
                                <button className="single-btn">
                                    <Icon.Basket2Fill />
                                </button>
                                <a href="wishlist.html" className="single-btn">
                                    <Icon.EyeFill />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="price-block">
                        <span className="price">$ {producto.precio}</span>
                        <del class="price-old">{producto.stock} Unds.</del>
                    </div>
                </div>
            </div>
    </div>
    );
}
 
export default Producto;
