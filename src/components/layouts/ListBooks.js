import React from 'react';
import ShowBook from './ShowBook';
const ListBooks = () => {

    const productos = [
        {
            nombre: 'Beats EP Wired On-Ear Headphone-Black',
            precio: '20.000',
            descripcion: 'Un libro muy bueno para leer',
            stock: '30',
            portada: '/imgpruebas/product-6.jpg',
            hover: '/imgpruebas/product-9.jpg',
            id: 1
        },
        {
            nombre: 'What Can You Do To Save Your BOOK',
            precio: '10.000',
            descripcion: 'Un libro muy bueno para leer',
            stock: '10',
            portada: '/imgpruebas/product-9.jpg',
            hover: '/imgpruebas/product-6.jpg',
            id: 2
        },
        {
            nombre: 'What Can You Do To Save Your BOOK',
            precio: '10.000',
            descripcion: 'Un libro muy bueno para leer',
            stock: '10',
            portada: '/imgpruebas/product-9.jpg',
            hover: '/imgpruebas/product-6.jpg',
            id: 3
        },
        {
            nombre: 'What Can You Do To Save Your BOOK',
            precio: '10.000',
            descripcion: 'Un libro muy bueno para leer',
            stock: '10',
            portada: '/imgpruebas/product-9.jpg',
            hover: '/imgpruebas/product-6.jpg',
            id: 4
        },
    ];

    return ( 
        <div className="row">
            <div className="col-md-12">
                {productos.map(producto => (
                    <ShowBook 
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default ListBooks;
