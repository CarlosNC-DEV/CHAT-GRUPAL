import React, { useState, useEffect } from 'react';
import ChatNavbar from './ChatNavbar';
import ChatFooter from './ChatFooter';
import ChatBody from './ChatBody';

const Chat = ({ socket }) => {

    const [mensajes, setMensajes] = useState([]);

    useEffect(()=>{
        socket.on("mensajes", (data)=>{
            setMensajes([...mensajes, data])
        })
    }, [socket, mensajes])

    return (
        <div className='d-flex p-5'>
            <div className="shadow-lg p-3 mb-5 bg-body-tertiary w-25 rounded mx-2">
                <p className='fs-4 text-center'>Usuarios Conectados</p>
                <ChatNavbar socket={socket}/>
            </div>

            <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded w-75 mx-2">
                <div>
                    <ChatBody mensajes={mensajes}/>
                </div>
                <div>
                    <ChatFooter socket={socket}/>
                </div>
            </div>
        </div>
    );
}

export default Chat;
