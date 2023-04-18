import React, { useState } from 'react';

const ChatFooter = ({ socket }) => {

    const [mensaje, setMensaje] = useState('');

    const enviarMensaje = (e) => {
        e.preventDefault();
        if (mensaje.trim() && localStorage.getItem("usuario")) {
            socket.emit("mensaje-enviado", {
                texto: mensaje,
                nombre: localStorage.getItem("usuario"),
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id
            })
        }
        setMensaje("")
    }

    return (
        <div className='mt-4'>
            <form onSubmit={(e) => enviarMensaje(e)} className="d-flex m-0 p-0">
                <div className="input-group m-0 p-0">
                    <input type="text" className="form-control border-end-0" placeholder="..." value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)} />
                    <button className="btn btn-primary border-start-0 rounded-end" type="submit">Enviar Mensaje</button>
                </div>
            </form>
        </div>
    );
}

export default ChatFooter;
