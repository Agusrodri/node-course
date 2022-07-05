const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //Middlewares
    this.middlewares();

    //rutas de mi aplicación

    this.routes();

    this.listen();
  }

  middlewares() {
    //cors: sirve para proteger nuestra api de manera superficial. Chrome y otros navegadores lo requieren

    this.app.use(cors());

    //Lectura y parseo del body: cualquier info que venga de los métodos GPPD se maneja con este middleware
    this.app.use(express.json());

    //Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  }
}

module.exports = Server;
