import { useState } from "react"
import styles from "./Filters.module.css"
import { useBooks } from "../../context/BooksContext"

const Filters = () => {

  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedAuthor, setSelectedAuthor] = useState('')
  const { authors, countries, getBooks, getBooksByAuthor, getBooksByCountry } =
    useBooks()

  // Select options
  const authorsOptions = authors.map((author, index) => (
    <option key={index} value={author}>{author}</option>
  ))
  const countriesOptions = countries.map((country, index) => (
    <option key={index} value={country}>{country}</option>
  ))

  const handleChangeAuthor = (e) => {
    setSelectedAuthor(e.target.value)
    getBooksByAuthor(1, e.target.value)
    setSelectedCountry('')
  }
  const handleChangeCountry = (e) => {
    setSelectedCountry(e.target.value)
    getBooksByCountry(1, e.target.value)
    setSelectedAuthor('')
  }
  return (
    <div className={styles.filters}>
      <form className={styles.formFilters}>
        <div className={styles.filter}>
          <label htmlFor='author'>Selecciona un autor </label>
          <select
            name='author'
            id='author'
            value={selectedAuthor}
            onChange={handleChangeAuthor}
          >
            <option value=''>Todos</option>
            {authorsOptions}
          </select>
        </div>
        <div className={styles.filter}>
          <label htmlFor='country'>Selecciona un país </label>
          <select
            name='country'
            id='country'
            value={selectedCountry}
            onChange={handleChangeCountry}
          >
            <option value=''>Todos</option>
            {countriesOptions}
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filters
