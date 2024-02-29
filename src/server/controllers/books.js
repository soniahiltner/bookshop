import { BooksService } from "../services/books.js"

export class BooksController {
  // get books
  static async getBooks(req, res) {
    const page = +req.query.page || 1
    const limit = 30
    const skip = (page - 1) * limit
    const { author, year, title, country } = req.query
    const { books, count } = await BooksService.getBooks(author, title, year, country, skip, limit)
    const totalPages = Math.ceil(count / limit)
    res.status(200).json(
      {
        books,
        page,
        count,
        totalPages
      })
  }

  // search filters
  static async getFilters(req, res) {
    const { authors, countries, years } = await BooksService.getFilters()
    res.status(200).json({ authors, countries, years })
  }

  // get book by id
  static async getBook(req, res) {
    const { id } = req.params
    const book = await BooksService.getBook(id)
    res.status(200).json(book)
  }
}