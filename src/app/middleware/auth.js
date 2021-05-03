const jwt = require('jsonwebtoken')
const authConfig = require('../../../config/auth.json')


module.exports = (req, res, next) => {
    const authHeader = req.headers.cookie || req.headers.authorization || req.body.token || req.headers['x-acccess-token']

    if(!authHeader)
        return res.status(401).send('Do not has a token');
    
    const parts = authHeader.split('=')

    if(!parts.length === 2)
        return res.status(401).send('token error');

    const [scheme, token] = parts
    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send('Token malformated!');

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send('Token invalid')

        req.userId = decoded.id
        return next()

    })

}