import { Router } from "express"
import { MemoryAuthRepository } from "../repositories/memory-auth.repository"
import { LogIn } from "../../application/log-in"
import { LogInController } from "../controller/log-in.controller"
// import Revo

const route = Router()

const memoryAuthRepository = new MemoryAuthRepository()
const signInUseCase = new LogIn(memoryAuthRepository)
const authController = new LogInController(signInUseCase)
route.post("/login", authController.logIn)

export default route
