const { response, request } = require("express");
const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

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
  const { nombre, edad, password, correo } = req.body;
  const usuario = new Usuario(nombre, edad, password);

  //Verificar si el correo existe
  /* const existeEmail = await Usuario.findOne({correo})
  if(!existeEmail){
    return res.status(400).json({
        msg: "El correo ya está registrado"
    })

  } */

  //Encriptar contraseña
  const salt = bcryptjs.genSaltSync(12);
  usuario.password = bcryptjs.hashSync(password, salt);

  //Guardar en DB

  res.json({
    msg: "post API - controlador",
    usuario,
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
