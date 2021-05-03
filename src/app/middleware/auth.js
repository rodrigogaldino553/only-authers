const jwt = require('jsonwebtoken')
const authConfig = require('../../../config/auth.json')


module.exports = (req, res, next) => {
    const authHeader = req.headers.cookie || req.headers.authorization || req.body.token || req.headers['x-acccess-token']
    //problem here, we need to build a way to clear cookie when tokin is invalid
    if(!authHeader)
        return res.status(401).redirect('/error?message=Você não tem autorização para acessar essa página!&status=401')
    
    const parts = authHeader.split('=')

    if(!parts.length === 2)
        return res.status(401).redirect('/error?message=Token inválido!&status=401')

    const [scheme, token] = parts
    if(!/^Bearer$/i.test(scheme))
        return res.status(401).redirect('/error?message=Token inválido!&status=401')//.send('Token malformated!');

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).redirect('/error?message=Token inválido!&status=401')

        req.userId = decoded.id
        return next()

    })

}