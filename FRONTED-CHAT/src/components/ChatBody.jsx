import React from 'react';

const ChatBody = ({ mensajes }) => {
    return (
        <div>
            <div className="container">
                {mensajes.map((mensaje) =>
                    mensaje.nombre === localStorage.getItem("usuario") ? (
                        <div key={mensaje.id} className="w-50 ms-auto">
                            <p className="text-end px-3 bg-gray">Tu</p>
                            <div className="d-flex justify-content-end fw-bold bg-light rounded p-2 m-2">
                                <p className="text-end mb-0">{mensaje.texto}</p>
                            </div>
                        </div>
                    ) : (
                        <div key={mensaje.id}>
                            <p className="ms-2">{mensaje.nombre}</p>
                            <div className="d-flex justify-content-start fw-bold bg-primary w-50 rounded p-2 m-2">
                                <p className="text-start mb-0">{mensaje.texto}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>

    );
}

export default ChatBody;
