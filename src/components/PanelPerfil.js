import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import {Tab, Nav} from 'react-bootstrap';
import EditarCuenta from './EditarCuenta';
import CrearLibro from './CrearLibro';

const PanelPerfil = ({usuarioAutenticado}) => {
    return ( 
        <div className="col-md-12">
            <div className="row">
                <Tab.Container defaultActiveKey="informacion-personal">
                    <div className="col-lg-3 col-12">
                        {
                            usuarioAutenticado.tipo === "Vendedor"
                            ?
                                (
                                    <Nav variant="pills" className="myaccount-tab-menu nav">
                                        <Nav.Item>
                                            <Nav.Link eventKey="informacion-personal">
                                                <Icon.PersonFill  className="icon-menu-tab" /> Información personal
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="mis-libros">
                                                <Icon.BookmarkCheckFill className="icon-menu-tab" /> Mis Libros
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="libros-vendidos">
                                                <Icon.BookmarkStar className="icon-menu-tab" /> Libros Vendidos
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="subir-libro">
                                                <Icon.JournalArrowUp  className="icon-menu-tab" /> Subir un libro
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cerrar-sesion">
                                                <Icon.DoorOpen className="icon-menu-tab" /> Cerrar Sesión
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                )
                            :
                                (
                                    <Nav variant="pills" className="myaccount-tab-menu nav">
                                        <Nav.Item>
                                            <Nav.Link eventKey="informacion-personal">
                                                <Icon.PersonFill  className="icon-menu-tab" /> Información personal
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="mis-compras">
                                                <Icon.CartCheckFill  className="icon-menu-tab"/> Mis Compras
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="cerrar-sesion">
                                                <Icon.DoorOpen className="icon-menu-tab" /> Cerrar Sesión
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                )
                            }
                    </div>
                    <div className="col-lg-9 col-12 mt--30 mt-lg--0">
                        <div className="tab-content" id="myaccountContent">
                            <Tab.Content>
                                <Tab.Pane eventKey="informacion-personal">
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <div className="panel-heading">
                                                Información personal:
                                            </div>
                                            <div className="row">
                                                <EditarCuenta 
                                                    usuario={usuarioAutenticado}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="mis-compras">
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <div className="panel-heading">
                                                Mis compras:
                                            </div> 
                                            {usuarioAutenticado.nombre}     
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="subir-libro">
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <div className="panel-heading">
                                                Subir un libro:
                                            </div> 
                                            <CrearLibro
                                            
                                            />   
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>   
                    </div>
                </Tab.Container>
            </div>
        </div>
     );
}
 
export default PanelPerfil;
