const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

const { Schema } = mongoose;

const userSchema = new Schema({
    is_active: {
        type: Boolean,
        default: true,
    },
    use_user: {
        type: String,
        required: true,
        trim: true,
    },
    use_password: {
        type: String,
        required: true,
        trim: true,
    },
    use_status: {
        type: Boolean,
        default: true,
    },
    system: [{
        type: mongoose.Types.ObjectId,
        ref: 'System',
    }],
}, { timestamps: true, versionKey: false });


userSchema.pre('save', function (next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('use_password')) return next();

    // generate a salt
    return bcrypt.genSalt(SALT_WORK_FACTOR, (errSalt, salt) => {
        if (errSalt) return next(errSalt);

        // hash the password using our new salt
        return bcrypt.hash(user.use_password, salt, (errHash, hash) => {
            if (errHash) return next(errHash);

            // override the cleartext password with the hashed one
            user.use_password = hash;
            return next();
        });
    });
});

const User = mongoose.model('User', userSchema, 'Users');

module.exports = User;