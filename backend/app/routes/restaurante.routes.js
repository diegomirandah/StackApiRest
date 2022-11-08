module.exports = app => {
    const restaurantes = require("../controllers/restaurante.controller.js");
    var router = require("express").Router();

    router.post("/", restaurantes.create);
    router.get("/", restaurantes.findAll);
    router.get("/:id", restaurantes.findOne);
    router.put("/:id", restaurantes.update);
    router.delete("/:id", restaurantes.delete);
    router.delete("/", restaurantes.deleteAll);
    app.use('/api/restaurantes', router);
  };