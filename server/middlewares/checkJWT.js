const jwt = require('jsonwebtoken')
require('dotenv').config()


const checkJWT = (req,res,next) => {
 try {
   //  const token = req.cookies('authToken')
   //  const token = req.headers['authorization']?.split(' ')[1]
   //  const token = req.headers['authorization'].split('Bearer ')[1]
    const token = req.headers['authorization']
    console.log( req.headers)
    console.log('jwtwwwwwwwwwwwwwwwwwwwwwwwwwwwww',token)

    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }
    const decoded = jwt.verify(token, process.env.JWTSECERET);
    req.user = decoded
    if(decoded) next()    
 } catch (error) {
    console.log('error in checkjwt Middleware', error)
    return res.status(403).json({ message: 'Invalid token' });
 } 
}

module.exports = checkJWT
