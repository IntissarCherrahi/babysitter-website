const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['parent', 'babysitter'], required: true },
    profile: Object
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
