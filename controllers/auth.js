
const User = require("../models/User")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, UnauthenticatedError } = require("../errors")

const register = async(req, res) => {
    console.log("registering user....")
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user:{
        name: user.name,
        email: user.email,
        token,
    }})
}

const login = async(req, res) => {
    const {email, password}  = req.body
    if(!email || !password) {
        throw new BadRequestError("please provide email and password")
    }
    const user = await User.findOne({ email })
    // const user = {
    //     name: "sumit",
    //     email: "sumit@gmail.com",
    //     password: "secret"
    // }
    if(!user) {
        throw new UnauthenticatedError("invalid credentials")
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect) {
        throw new UnauthenticatedError("invalid credentials")
    }
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({ user: {name: user.name, token }})
}

module.exports = {
    register, login
}