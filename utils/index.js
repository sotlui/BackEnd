const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    comparePasswords: (userPassword, reqPassword) => bcrypt.compareSync(reqPassword, userPassword),
    createToken: (user) => {
        const payload = {
            id: user._id,
            user: user.use_user,
            password: user.use_password,
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
        };
        try {
            const token = jwt.sign(payload, process.env.JWT_SECRET);
            return token;
        } catch (error) {
            return undefined;
        }
    }


}