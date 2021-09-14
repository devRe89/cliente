import React from 'react';
import PanelPerfil from './PanelPerfil';


const Perfil = () => {
    const usuarioAutenticado = {
        nombre: "rene",
        email: "rene@rene.com",
        tipo: "Normal",
        nickname: "arturo89"
    };

    return ( 
        <div className="content-panel-perfil">
            <div className="container">
                <div className="row">
                    <PanelPerfil 
                        usuarioAutenticado={usuarioAutenticado}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Perfil;
