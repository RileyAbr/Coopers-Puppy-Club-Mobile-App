const mongoose = require("../services/mongodb.service").mongoose;
const isAlpha = require("validator").isAlpha,
    isInt = require("validator").isInt;

const Schema = mongoose.Schema;

const parkSchema = new Schema(
    {
        parkName: {
            type: String,
            trim: true,
            minlength: 1,
            required: true
        },
        address: {
            type: String,
            trim: true,
            minlength: 1,
            required: "Address is required"
        },
        city: {
            type: String,
            trim: true,
            minlength: 1,
            required: "City is required"
        },
        state: {
            type: String,
            trim: true,
            required: "State is required",
            minlength: 2,
            maxlength: 2,
            validate: [isAlpha, "Only letters are permitted"]
        },
        zipcode: {
            type: String,
            minlength: 5,
            maxlength: 5,
            required: "Zipcode is required",
            validate: [isInt, "Zipcode's must be 5 numbers long"]
        },
        breedSize: {
            type: String,
            lowercase: true,
            required: true,
            enum: ["large", "small", "any"]
        },
        hasToys: {
            type: Boolean
        },
        hasWater: {
            type: Boolean
        },
        hasBags: {
            type: Boolean
        }
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

parkSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
parkSchema.set("toJSON", {
    virtuals: true
});

parkSchema.findById = function (cb) {
    return this.model("Parks").find({ id: this.id }, cb);
};

const Park = mongoose.model("Parks", parkSchema);

exports.findById = (id) => {
    return Park.findById(id).then((result) => {
        result = result.toJSON();
        delete result._id;
        delete result.__v;
        return result;
    });
};

exports.createPark = (ParkData) => {
    const park = new Park(ParkData);

    return park.save();
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Park.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, Parks) {
                if (err) {
                    reject(err);
                } else {
                    resolve(Parks);
                }
            });
    });
};

exports.patchPark = (id, parkData) => {
    return Park.findOneAndUpdate(
        {
            _id: id
        },
        parkData
    );
};

exports.removeById = (parkId) => {
    return new Promise((resolve, reject) => {
        Park.deleteMany({ _id: parkId }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};
