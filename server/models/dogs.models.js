const mongoose = require("../services/mongodb.service").mongoose;

const Schema = mongoose.Schema;

const dogSchema = new Schema(
    {
        ownerID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        },
        dogName: {
            type: String,
            trim: true,
            minlength: 1,
            required: "The dog's name is required"
        },
        sex: {
            type: String,
            lowercase: true,
            required: "The dog's sex is required",
            enum: ["male", "female"]
        },
        breed: {
            type: String,
            trim: true,
            minlength: 1,
            required: "The dog's breed is required"
        },
        size: {
            type: String,
            lowercase: true,
            required: true,
            enum: ["large", "small"]
        },
        fixed: {
            type: Boolean,
            required: "The dog's fixed status is required"
        },
        age: {
            type: Number
        }
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

dogSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
dogSchema.set("toJSON", {
    virtuals: true
});

dogSchema.findById = function (cb) {
    return this.model("Dogs").find({ id: this.id }, cb);
};

const Dog = mongoose.model("Dogs", dogSchema);

exports.findById = (id) => {
    return Dog.findById(id).then((result) => {
        result = result.toJSON();
        delete result._id;
        delete result.__v;
        return result;
    });
};

exports.createDog = (DogData) => {
    const dog = new Dog(DogData);

    return dog.save();
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Dog.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, Dogs) {
                if (err) {
                    reject(err);
                } else {
                    resolve(Dogs);
                }
            });
    });
};

exports.patchDog = (id, dogData) => {
    return Dog.findOneAndUpdate(
        {
            _id: id
        },
        dogData
    );
};

exports.removeById = (dogId) => {
    return new Promise((resolve, reject) => {
        Dog.deleteMany({ _id: dogId }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};
