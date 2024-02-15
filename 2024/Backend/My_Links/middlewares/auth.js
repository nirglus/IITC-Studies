const { verifyToken } = require("../utils/jwt");

const auth = (req, res, next) =>{
    try {
        const userToken = req.headers["authorization"];
        if(!userToken) return res.status(401).send("UnAuthorized");
        const token = userToken.split(" ")[1];
        const payload = verifyToken(token);
        if(!payload) return res.status(401).send("UnAuthorized");
        console.log(userToken);
        req.user = payload; // pass the payload to the functions
        next();
    } catch (error) {
        return res.status(401).send("UnAuthorized");
    }
}

module.exports = { auth };