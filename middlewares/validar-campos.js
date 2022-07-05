const { validationResult } = require("express-validator");

const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  //next es la funcion que llamo si el middleware pasa

  next(); //si llega a este punto, continua con el siguiente middleware
};

module.exports = validarCampos;
