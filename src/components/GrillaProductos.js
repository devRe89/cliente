import React from 'react';
import Producto from './Producto';

const GrillProductos = () => {

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
        {
            nombre: 'What Can You Do To Save Your BOOK',
            precio: '10.000',
            descripcion: 'Un libro muy bueno para leer',
            stock: '10',
            portada: '/imgpruebas/product-9.jpg',
            hover: '/imgpruebas/product-6.jpg',
            id: 5
        },
        {
            nombre: 'What Can You Do To Save Your BOOK',
            precio: '10.000',
            descripcion: 'Un libro muy bueno para leer',
            stock: '10',
            portada: '/imgpruebas/product-9.jpg',
            hover: '/imgpruebas/product-6.jpg',
            id: 6
        },
        {
            nombre: 'What Can You Do To Save Your BOOK',
            precio: '10.000',
            descripcion: 'Un libro muy bueno para leer',
            stock: '10',
            portada: '/imgpruebas/product-9.jpg',
            hover: '/imgpruebas/product-6.jpg',
            id: 7
        },
        {
            nombre: 'What Can You Do To Save Your BOOK',
            precio: '10.000',
            descripcion: 'Un libro muy bueno para leer',
            stock: '10',
            portada: '/imgpruebas/product-9.jpg',
            hover: '/imgpruebas/product-6.jpg',
            id: 8
        },
        {
            nombre: 'What Can You Do To Save Your BOOK',
            precio: '10.000',
            descripcion: 'Un libro muy bueno para leer',
            stock: '10',
            portada: '/imgpruebas/product-9.jpg',
            hover: '/imgpruebas/product-6.jpg',
            id: 9
        },
    ];

    return (

        <div className="content-grid">
            <div className="content-tabs">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <p 
                            className="nav-link active" 
                            id="shop-tab"
                            aria-controls="shop" 
                            aria-selected="true">
                            Nueva Colección
                        </p>
                        <span className="arrow-icon"></span>
                    </li>
                </ul>
            </div>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane show active" id="shop" role="tabpanel" aria-labelledby="shop-tab">
                    <div className="products-panel">
                        {productos.map(producto => (
                            <Producto
                                key={producto.id}
                                producto={producto}
                            />
                        ))}
                    </div>
                </div>
            </div>        
        </div>

    );
}
 
export default GrillProductos;
