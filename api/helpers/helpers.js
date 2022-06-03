const db = require('../database')
const jwt = require('jsonwebtoken')

const getJwtToken = (user) => {
    process.env.JWT_SECRET
    const token = jwt.sign({ _id: user._id, email: user.email }, 'jwtsecret', { expiresIn: '1d' });

    return token;
}


const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (authHeader) {
        const token = authHeader.split(" ")[1]

        jwt.verify(token, 'jwtsecret', (err, user) => {
            if (err) res.status(403).json({error: "Token is not valid!"})
            req.user = user
            next()
        })
    } else {
        return res.status(401).json("You are not authenticated!")
    }
}


const verifyTokenAndAuthorization = async (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id) {
            next()
        } else {
            res.status(403).json('You are not allowed to do that!')
        }
    })
}


module.exports = { verifyToken, verifyTokenAndAuthorization, getJwtToken }