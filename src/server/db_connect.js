import mongoose from 'mongoose'
import { MONGO_URI, DBNAME } from './config.js'

async function dbConnect() {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: DBNAME,
    })
    //console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

export default dbConnect