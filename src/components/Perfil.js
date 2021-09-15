import React, {useState} from 'react';
import PanelPerfil from './PanelPerfil';


const Perfil = () => {
    const [usuarioAutenticado, guardarUsuario] = useState({
        nombre: "Arturo",
        email: "rene@rene.com",
        tipo: "Vendedor",
        nickname: "arturo89",
        password: "12345",
        confirmar: "12345",
    });

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
