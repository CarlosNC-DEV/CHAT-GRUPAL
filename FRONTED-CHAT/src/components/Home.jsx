import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ socket }) => {
    const navigate = useNavigate();

    const [nombreUsuario, setNombreUsuario] = useState('');

    const enviarNombre = (e) => {
        e.preventDefault();
        localStorage.setItem("usuario", nombreUsuario);
        socket.emit("nombre-usuario", { nombreUsuario: nombreUsuario, idUsuario: socket.id });
        navigate('/chat')
    }

    return (
        <div className='d-flex align-items-center justify-content-center vh-100'>
            <div className="text-center w-50 shadow p-3 mb-5 bg-light rounded">
                <h2 className='fw-bold mb-4'>¿Cómo quieres que te llamemos?</h2>
                <form onSubmit={(e) => enviarNombre(e)} className="d-flex">
                    <div className="input-group">
                        <input type="text" class="form-control border-end-0" placeholder="Ingresa tu nombre..." value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} />
                        <button className="btn btn-primary border-start-0 rounded-end" type="submit">Comenzar Chat</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Home;
