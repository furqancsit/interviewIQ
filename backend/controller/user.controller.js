import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { generateToken } from "../config/genrateToken.js";

const googleAuth = async (req, res) => {
    try {

        const { name, email } = req.body
        const existedUser = await User.findOne({ email })
        if (existedUser) {

            throw new ApiError(403, "User already Exist")

        }

        const user = await User.create({
            name, email
        })

        const token = generateToken(user._id)
        res.cookie("token", token, {
            http: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000

        })


        return res.status(201).json(new ApiResponse(201, user))


    } catch (error) {
        throw new ApiError(500, "google Auth Error", error)
    }
}

const logOut = async (req, res) => {
    try {

        await res.clearCookie("token")
        return res.status(201).json(new ApiResponse(201, "Logout successfully"))

    } catch (error) {
        console.log(error);

    }
}


const getCurrentUser = async (req, res) => {

    try {
        const userId = req.userId
        const user = await User.findById(userId)
        if (!user) {

            throw new ApiError(404, "User Does not found")

        }

        return new res.status(200).json(new ApiResponse(200, user))
    } catch (error) {
        throw new ApiError(500, "faled to get current User", error)

    }


}



export { googleAuth, logOut, getCurrentUser }