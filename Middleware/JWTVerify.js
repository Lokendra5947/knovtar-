
const jwt = require("jsonwebtoken")
let verifyToken = async (req, res, next) => {
  try {
    // console.log(req.headers.token)
    let token = req.headers.token
    if (!token) {return res.status(400).send({ success: false, message: "Token not found" });}
    var decoded = await jwt.verify(token,"shhh")
    if(!decoded) {return res.status(400).send({ success: false, message: "Login Please" })}
    req.createdBy  = decoded.user._id
    // console.log((decoded))
    next();
  } catch (error) {
    res.status(400).send({ success: false, message: "Crashed Token" })
    console.log("Error Occured",error)
  }
};
module.exports = verifyToken;

