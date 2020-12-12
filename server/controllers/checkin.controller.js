const CheckInModel = require("../models/checkin.models");

exports.insert = (req, res) => {
    CheckInModel.createCheckIn(req.body).then((result) => {
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
    CheckInModel.list(limit, page).then((result) => {
        res.status(200).send(result);
    });
};

exports.listCheckinData = (req, res) => {
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
    CheckInModel.listCheckinData(limit, page).then((result) => {
        res.status(200).send(result);
    });
};

exports.getById = (req, res) => {
    CheckInModel.findById(req.params.checkInId).then((result) => {
        res.status(200).send(result);
    });
};

exports.getByParkId = (req, res) => {
    CheckInModel.findByParkId(req.params.parkId).then((result) => {
        res.status(200).send(result);
    });
};

exports.patchById = (req, res) => {
    CheckInModel.patchCheckIn(req.params.checkInId, req.body).then(() => {
        res.status(204).send({});
    });
};

exports.removeById = (req, res) => {
    CheckInModel.removeById(req.params.checkInId).then(() => {
        res.status(204).send({});
    });
};
