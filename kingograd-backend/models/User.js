const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    major: { type: String, required: true },
    studentid: { type: String, required: true, unique: true }
});

// Middleware to hash the password before saving the user document
UserSchema.pre('save', async function(next) {
    const user = this;

    // Only hash the password if it has been modified (or is new)
    if (user.isModified('password')) {
        try {
            console.log('Hashing password for user:', user.username); // Debugging log
            user.password = await bcrypt.hash(user.password, 8);
            console.log('Hashed password:', user.password); // Debugging log
        } catch (error) {
            return next(error);
        }
    }

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
