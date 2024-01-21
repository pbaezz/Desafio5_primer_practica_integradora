import { Router } from "express";
import { usersRouter } from "./users.routes.js";
import { cartsRouter } from "./carts.routes.js";
import productsRouter from "./products.routes.js";
import viewsRouter from "./views.routes.js";
import { messagesRouter } from "./messages.routes.js";

const router = Router()

router.use('/api/users', usersRouter)
router.use('/api/carts', cartsRouter)
router.use('/api/messages', messagesRouter)
router.use('/api', productsRouter)
router.use('/', viewsRouter)

export default router