import express from 'express'
import { createCheckoutSession } from '../controllers/stripe.js'
export const stripeRouter = express.Router()

stripeRouter.post("/", createCheckoutSession)