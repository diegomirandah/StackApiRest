module.exports = app => {
    const clients = require("../controllers/client.controller.js");
    var router = require("express").Router();

    router.post("/", clients.create);
    router.get("/", clients.findAll);
    router.get("/:id", clients.findId);
    router.put("/:id", clients.update);
    router.delete("/:id", clients.delete);
    router.delete("/", clients.deleteAll);
    app.use('/api/clients', router);
  };