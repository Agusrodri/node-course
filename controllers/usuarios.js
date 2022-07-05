const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "No name", apikey, page = 1, limit } = req.query; //query params // si la pagina no se manda por parametro, se le establece el valor de 1, lo mismo con el nombre
  res.json({
    msg: "get API - controlador",
    query,
  });
};

const usuariosPut = (req = request, res = response) => {
  const { id } = req.params;
  res.json({
    msg: "put API - controlador",
    id,
  });
};

const usuariosPost = (req = request, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "post API - controlador",
    nombre,
    edad,
  });
};

const usuariosDelete = (req = request, res = response) => {
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
