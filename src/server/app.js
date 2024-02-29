import express from "express"
import cors from 'cors'
import helmet from "helmet"
import { booksRouter } from "./routes/books.js"
import { stripeRouter } from "./routes/stripe.js"
import dbConnect from './db_connect.js'
dbConnect()


const app = express()
app.disable("x-powered-by")
app.use(cors())
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: { policy: "same-site" }
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Stripe api endpoint
app.use("/api/create-checkout-session", stripeRouter)
// Books api endpoint
app.use('/api/books', booksRouter)

export { app }