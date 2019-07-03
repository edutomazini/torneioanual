
const UserAuth = process.env.AUTH_USER || 'projeto'
const UserPass = process.env.AUTH_PASS || 'senha123'

module.exports = basicAuth;

async function basicAuth(req, res, next) {
    // basic authentication
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({ message: 'Necessario basic authentication.' })
    }

    // verifica usuario e senha
    const base64Credentials = req.headers.authorization.split(' ')[1]
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
    const [username, password] = credentials.split(':')

    if (username != UserAuth || password != UserPass)
        return res.status(401).json({ message: 'Usuario ou senha invalidos.' })

    next()
}