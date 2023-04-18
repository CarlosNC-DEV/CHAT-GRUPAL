import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';
import io from 'socket.io-client';

const socket = io('http://localhost:3000')

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home socket={socket}/>}></Route>
      <Route path='/chat' element={<Chat socket={socket}/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
