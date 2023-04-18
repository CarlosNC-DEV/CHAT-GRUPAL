import React, { useEffect, useState } from 'react';

const ChatNavbar = ({socket}) => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        socket.on("usuarios", (usuarios)=>{
            setUsuarios(usuarios);
        })
    }, [socket]);

    return (
        <div>
            {usuarios.map((usuarios, index)=>(
                <p key={index}>🟢 {usuarios.nombreUsuario}</p>
            ))}
        </div>
    );
}

export default ChatNavbar;
