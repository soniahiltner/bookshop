import express from 'express'
import { BooksController } from '../controllers/books.js'
export const booksRouter = express.Router()

booksRouter.get('/', BooksController.getBooks)
booksRouter.get('/filters', BooksController.getFilters)
booksRouter.get('/:id', BooksController.getBook)


