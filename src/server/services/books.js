import {Book} from '../models/book.js'

export class BooksService {
  // get books
  static async getBooks(author, title, year, country, skip, limit) {

    try {
      const query = {}
      if (title) query.title = { $regex: title, $options: 'i' }
      if (author) query.author = author
      if (year) query.year = year
      if (country) query.country = country
      const books = await Book.find(query).skip(skip).limit(limit)
      const count = await Book.countDocuments(query)
      return { books, count }
    } catch (error) {
      console.log('Error trying to get the books', error)
    }
  }

  // search filters
  static async getFilters() {
    try {
      const authors = await Book.find().distinct('author')
      const years = await Book.find().distinct('year')
      const countries = await Book.find().distinct('country')
      return { authors, countries,  years }
    } catch (error) {
      console.log('Error trying to get the filters', error)
    }
  }

  // get book by id
  static async getBook(id) {
    try {
      return await Book.findById(id)
    }
    catch (error) {
      console.log('Error trying to get the book', error)
    }
  }
}

