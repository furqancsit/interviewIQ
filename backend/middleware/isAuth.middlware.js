import jwt from "jsonwebtoken"
import { ApiError } from "../utils/ApiError.js"

const isAuth = (req, res, next) => {
  try {
    const { token } = req.cookies

    if (!token) {
      return next(new ApiError(401, "No token provided"))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.userId = decoded.userId

    next()
  } catch (error) {
    return next(new ApiError(401, "Invalid or expired token"))
  }
}

export default isAuth