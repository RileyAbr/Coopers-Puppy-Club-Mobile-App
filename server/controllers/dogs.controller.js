const DogModel = require("../models/dogs.models");

exports.insert = (req, res) => {
    DogModel.createDog(req.body).then((result) => {
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
    DogModel.list(limit, page).then((result) => {
        res.status(200).send(result);
    });
};

exports.getById = (req, res) => {
    DogModel.findById(req.params.dogId).then((result) => {
        res.status(200).send(result);
    });
};

exports.patchById = (req, res) => {
    DogModel.patchUser(req.params.dogId, req.body).then(() => {
        res.status(204).send({});
    });
};

exports.removeById = (req, res) => {
    DogModel.removeById(req.params.dogId).then(() => {
        res.status(204).send({});
    });
};
