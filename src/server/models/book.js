import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  }
})

export const Book = mongoose.model("Book", BookSchema)

