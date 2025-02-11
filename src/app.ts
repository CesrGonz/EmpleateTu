<<<<<<< HEAD
import express, {Response, Request} from 'express'
import authRouter from './routes/auth.routes'
import userRouter from './routes/user.routes'
import offerRouter from './routes/offert.routes'
import categoryRouter from './routes/category.routes'

import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import compression from 'compression'
import cookieParser  from 'cookie-parser'
import cors  from 'cors'
import { libsql } from './database/database'
import offertRoutes from './routes/offert.routes'
import morgan from 'morgan'


const app = express()
app.use(cookieParser())
//todo limitar cors
//cambiar la url cuando deploy
app.use(cors({
    origin: ['http://localhost:5173','https://empleatetuFrontEnd.onrender.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json())
app.use(helmet())
app.use(compression())
app.use(morgan('tiny'))
const limiter = rateLimit({
    max: 1000,
    windowMs: 1000 * 15 * 60 // 15 minutos
})
app.use(limiter)
app.use('/api/auth',authRouter)
app.use('/api/users',userRouter)
app.use('/api/offers', offerRouter)
app.use('/api/categories', categoryRouter)
=======
import express, {Request, Response, Router} from 'express'
import authRouter from './routes/auth.routes'
import userRoute  from '@/routes/user.routes'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import compression from 'compression'
import cookieParser from "cookie-parser"

const app = express()
const limiter = rateLimit({
    max: 3, 
    windowMs: 1000*15*60
})
app.use(helmet())
app.use(compression());
app.use(cookieParser())

//Permitir que comprenda los datos en json
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/user', userRoute)
>>>>>>> dd119fccd3b466aee8bd1f158d15e1804132adf9

app.get('/', (req:Request, res:Response) => {
    res.send('Bienvenido al backend (api rest)')
})

export default app
