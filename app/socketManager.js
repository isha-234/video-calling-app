const io = require("./../server").io;

module.exports = (socket) => {
  try {
    //"connected" is shown on the console when socket is connected
    console.log("Connected");
    socket.on("code", (data, callback) => {
      socket.broadcast.emit("code", data);
    });
  } catch (ex) {
    console.log(ex.message);
  }
};