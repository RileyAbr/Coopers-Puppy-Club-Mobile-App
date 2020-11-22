const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const UsersRouter = require("./routes/users.route");
const AuthRouter = require("./routes/auth.route");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Methods",
        "GET,HEAD,PUT,PATCH,POST,DELETE"
    );
    res.header("Access-Control-Expose-Headers", "Content-Length");
    res.header(
        "Access-Control-Allow-Headers",
        "Accept, Authorization, Content-Type, X-Requested-With, Range"
    );
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use(bodyParser.json());
UsersRouter.routesConfig(app);
AuthRouter.routesConfig(app);

app.listen(process.env.PORT, function () {
    console.log(
        `Cooper's Puppy Club server is listening on port: ${process.env.PORT}`
    );
});
