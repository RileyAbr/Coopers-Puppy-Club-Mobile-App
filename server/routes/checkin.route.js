const CheckInController = require("../controllers/checkin.controller");
const ValidationMiddleware = require("../middlewares/authValidate.middleware");

exports.routesConfig = function (app) {
    app.post("/checkins", [
        ValidationMiddleware.validJWTNeeded,
        CheckInController.insert
    ]);
    app.get("/checkins", [CheckInController.list]);
    app.get("/checkins/parks", [CheckInController.listCheckinData]);
    app.get("/checkins/:checkInId", [CheckInController.getById]);
    app.get("/checkins/park/:parkId", [CheckInController.getByParkId]);
    app.patch("/checkins/:checkInId", [
        ValidationMiddleware.validJWTNeeded,
        CheckInController.patchById
    ]);
    app.delete("/checkins/:checkInId", [
        ValidationMiddleware.validJWTNeeded,
        CheckInController.removeById
    ]);
};
