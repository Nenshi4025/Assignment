const index = require("mongoose");

console.log("Hori bhai run");

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } =
    process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000,
};

// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
const url = `mongodb://0.0.0.0:27017/nenshi_project_db`;

index
    .connect(url, options)
    .then(function () {
        console.log("MongoDB is connected");
    })
    .catch(function (err) {
        console.log(err, "Error ye hai");
    });
