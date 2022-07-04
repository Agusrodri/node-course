const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Middlewares
    this.middlewares();

    //rutas de mi aplicación

    this.routes();

    this.listen();
  }

  middlewares() {
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", function (req, res) {
      res.json({
        msg: "get API",
      });
    });

    this.app.put("/api", function (req, res) {
      res.json({
        msg: "put API",
      });
    });

    this.app.post("/api", function (req, res) {
      res.json({
        msg: "post API",
      });
    });

    this.app.delete("/api", function (req, res) {
      res.json({
        msg: "delete API",
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  }
}

module.exports = Server;
