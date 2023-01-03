const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.msg || "something went wrong please try again later"
  }
  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message })
  // }
  if(err.name === validationError) {
    customError.msg = Object.values(err.errors).map((item) => item.message).join(",")

  }
  if(err.code && err.code === 11000) {
    customError.msg = `duplicate value entered for ${Objext.keys(err.keyValue)} field, please choose another value`
    customError.statusCode = 400
  }
  if(err.name = "castError"){
    customError.msg = `no item found with id: ${err.value}`
    customError.statusCode = 404
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware
