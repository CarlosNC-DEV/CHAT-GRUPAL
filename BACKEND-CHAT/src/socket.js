let usuarios = [];
export default (io) => {
  io.on("connection", (socket) => {
    console.log(`Usuario Conectado ${socket.id}`);

    socket.on("nombre-usuario", (data) => {
      usuarios.push(data);
      io.emit("usuarios", usuarios);
    });

    socket.on("mensaje-enviado", (data) => {
      io.emit("mensajes", data);
    });

    socket.on("disconnect", () => {
      console.log(`Usuario Desconectado`);
      usuarios = [];
    });
  });
};
