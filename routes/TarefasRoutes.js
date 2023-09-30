const router = require("express").Router();

const tarefasController = require("../controller/TarefasController");

router.get("/", tarefasController.read  );

router.post("/", tarefasController.create);

router.put("/:id", tarefasController.update);

router.delete("/:id", tarefasController.del);

router.get("/:id",);


module.exports = router;