import dotenv from 'dotenv'
dotenv.config()

export const MONGO_URI = process.env.VITE_MONGO_URI

export const DBNAME = process.env.NODE_ENV === 'test'
  ? process.env.VITE_TEST_DBNAME
  : process.env.VITE_DBNAME

export const STRIPE_SECRET_KEY = process.env.VITE_STRIPE_PRIVATE_KEY

export const SERVER_URL = process.env.VITE_SERVER_URL