const DogsController = require("../controllers/dogs.controller");
const ValidationMiddleware = require("../middlewares/authValidate.middleware");

exports.routesConfig = function (app) {
    app.post("/dogs", [
        ValidationMiddleware.validJWTNeeded,
        DogsController.insert
    ]);
    app.get("/dogs", [DogsController.list]);
    app.get("/dogs/:dogId", [DogsController.getById]);
    app.patch("/dogs/:dogId", [
        ValidationMiddleware.validJWTNeeded,
        DogsController.patchById
    ]);
    app.delete("/dogs/:dogId", [
        ValidationMiddleware.validJWTNeeded,
        DogsController.removeById
    ]);
};
