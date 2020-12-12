const mongoose = require("../services/mongodb.service").mongoose;

const Schema = mongoose.Schema;

const checkInSchema = new Schema(
    {
        parkID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Parks"
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        },
        dogID: { type: mongoose.Schema.Types.ObjectId, ref: "Dogs" },
        arriveTime: { type: Date },
        leaveTime: { type: Date }
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

checkInSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
checkInSchema.set("toJSON", {
    virtuals: true
});

checkInSchema.findById = function (cb) {
    return this.model("Users").find({ id: this.id }, cb);
};

const CheckIn = mongoose.model("CheckIn", checkInSchema);

exports.findById = (id) => {
    return CheckIn.findById(id).then((result) => {
        result = result.toJSON();
        delete result._id;
        delete result.__v;
        return result;
    });
};

exports.findByParkId = (parkId) => {
    return CheckIn.findById(parkId).then((result) => {
        result = result.toJSON();
        delete result._id;
        delete result.__v;
        return result;
    });
};

exports.createCheckIn = (checkInData) => {
    const checkIn = new CheckIn(checkInData);

    return checkIn.save();
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        CheckIn.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, checkIns) {
                if (err) {
                    reject(err);
                } else {
                    resolve(checkIns);
                }
            });
    });
};

exports.listCheckinData = (perPage, page) => {
    return new Promise((resolve, reject) => {
        CheckIn.find()
            .populate("parkID", "parkName")
            .populate("userID")
            .populate("dogID", "dogName")
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, checkIns) {
                if (err) {
                    reject(err);
                } else {
                    resolve(checkIns);
                }
            });
    });
};

exports.patchCheckIn = (id, checkInData) => {
    return CheckIn.findOneAndUpdate(
        {
            _id: id
        },
        checkInData
    );
};

exports.removeById = (id) => {
    return new Promise((resolve, reject) => {
        CheckIn.deleteMany({ _id: id }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};
