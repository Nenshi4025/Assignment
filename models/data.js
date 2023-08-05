const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const DataSchema = new Schema({
    name: String,
    img: String,
    summary: String
}, {
    timestamps: true,
}
);

const Data = mongoose.model('data', DataSchema);

module.exports = Data;
