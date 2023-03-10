const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    age: Number
},{collection : 'customer'})

const User = mongoose.model('customer', UserSchema)

module.exports = User;