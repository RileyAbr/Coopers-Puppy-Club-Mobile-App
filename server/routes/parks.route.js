const ParksController = require("../controllers/parks.controller");
const ValidationMiddleware = require("../middlewares/authValidate.middleware");

exports.routesConfig = function (app) {
    app.post("/parks", [
        ValidationMiddleware.validJWTNeeded,
        ParksController.insert
    ]);
    app.get("/parks", [ParksController.list]);
    app.get("/parks/:parkId", [ParksController.getById]);
    app.patch("/parks/:parkId", [
        ValidationMiddleware.validJWTNeeded,
        ParksController.patchById
    ]);
    app.delete("/parks/:parkId", [
        ValidationMiddleware.validJWTNeeded,
        ParksController.removeById
    ]);
};
