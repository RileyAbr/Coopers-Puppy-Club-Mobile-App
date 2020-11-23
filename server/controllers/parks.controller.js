const ParkModel = require("../models/parks.models");

exports.insert = (req, res) => {
    ParkModel.createPark(req.body).then((result) => {
        res.status(201).send({ id: result._id });
    });
};

exports.list = (req, res) => {
    let limit =
        req.query.limit && req.query.limit <= 100
            ? parseInt(req.query.limit)
            : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    ParkModel.list(limit, page).then((result) => {
        res.status(200).send(result);
    });
};

exports.getById = (req, res) => {
    ParkModel.findById(req.params.parkId).then((result) => {
        res.status(200).send(result);
    });
};

exports.patchById = (req, res) => {
    ParkModel.patchUser(req.params.parkId, req.body).then(() => {
        res.status(204).send({});
    });
};

exports.removeById = (req, res) => {
    ParkModel.removeById(req.params.parkId).then(() => {
        res.status(204).send({});
    });
};
