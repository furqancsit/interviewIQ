import { Router } from "express"
import { googleAuth, logOut, getCurrentUser } from "../controller/user.controller";


const router = Router()

router.post("/google", googleAuth)
router.get("/logout", logOut)
router.get("/getcurrentuser", getCurrentUser)

export default router

