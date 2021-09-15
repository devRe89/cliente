import React from 'react';

const ShowBook = ({producto}) => {
    return ( 
        <div className="single-book">
            <div className="img-single-book">
                <img src={producto.portada} alt="" />
            </div>
            <div className="details-single-book">
                <p className="price-single-book">
                    $ {producto.precio}
                </p>
                <p className="qty-single-book">
                    Cant. {producto.stock}
                </p>
                <div className="descriptio-single-book">
                    <small>{producto.descripcion}</small>
                    <p className="name-single-book">
                        {producto.nombre}
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default ShowBook;
