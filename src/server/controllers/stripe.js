import { STRIPE_SECRET_KEY } from "../config.js"
import Stripe from 'stripe'
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
})
import { SERVER_URL } from "../config.js"

export const createCheckoutSession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: req.body.map((item) => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.title,
            images: [item.img],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity
      })),
      mode: 'payment',
      success_url: `${SERVER_URL}/success`,
      cancel_url: `${SERVER_URL}/cancel`,
    })
    res.status(200).json({ url: session.url })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}