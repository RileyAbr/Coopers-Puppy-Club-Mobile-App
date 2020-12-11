const UsersController = require("../controllers/users.controller");
// const PermissionMiddleware = require("..middlewares/authPermission.middleware");
const ValidationMiddleware = require("../middlewares/authValidate.middleware");

exports.routesConfig = function (app) {
    app.post("/users", [UsersController.insert]);
    app.get("/users", [
        // This could be public later on
        ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
        UsersController.list
    ]);
    app.get("/users/:userId", [
        ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.minimumPermissionLevelRequired(FREE),
        // PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.getById
    ]);
    app.patch("/users/:userId", [
        ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.minimumPermissionLevelRequired(FREE),
        // PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.patchById
    ]);
    app.delete("/users/:userId", [
        ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        UsersController.removeById
    ]);
};
