import { createContext, useContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { set } from 'mongoose'

const BooksContext = createContext()

export const useBooks = () => {
  return useContext(BooksContext)
}

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([])
  const [cart, setCart] = useLocalStorage('BooksShoppingCart', [])
  const [wishList, setWishList] = useLocalStorage('BooksWishList', [])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [count, setCount] = useState(0)
  const [authors, setAuthors] = useState([])
  const [countries, setCountries] = useState([])


  //Get books
  const getBooks = async (page) => {
    try {
      const response = await fetch(`/api/books?page=${page}`)
      const data = await response.json()
      setBooks(data.books)
      setPage(data.page)
      setCount(data.count)
      setTotalPages(data.totalPages)
    } catch (error) {
      console.error('There was an error fetching the books!', error)
    }
  }

  //Get filters
  const getFilters = async () => {
    try {
      const response = await fetch('/api/books/filters')
      const data = await response.json()
      setAuthors(data.authors)
      setCountries(data.countries)
    } catch (error) {
      console.error('There was an error fetching the filters!', error)
    }
  }

  // Get books by author
  const getBooksByAuthor = async (page, author) => {
    try {
      const response = await fetch(`/api/books?author=${author}&page=${page}`)
      const data = await response.json()
      setBooks(data.books)
      setPage(data.page)
      setCount(data.count)
      setTotalPages(data.totalPages)
    } catch (error) {
      console.error('There was an error fetching the books!', error)
    }
  }

  // Get books by country
  const getBooksByCountry = async (page, country) => {
    try {
      const response = await fetch(`/api/books?country=${country}&page=${page}`)
      const data = await response.json()
      setBooks(data.books)
      setPage(data.page)
      setCount(data.count)
      setTotalPages(data.totalPages)
    } catch (error) {
      console.error('There was an error fetching the books!', error)
    }
  }

  useEffect(() => {
    getBooks(page)
    getFilters()
  }, [page])

  //Pagination
  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1)
    }
  }
  const nextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1)
    }
  }
  const firstPage = () => {
    setPage(1)
  }
  const lastPage = () => {
    setPage(totalPages)
  }

  //Add/remove from cart
  const addToCart = (product) => {
    setCart([...cart, product])
  }
  const removeFromCart = (product) => {
    let productToDelete = cart.find((item) => item.id === product.id)
    setCart(cart.filter((item) => item.id != productToDelete.id))
  }

  //Remove all from cart
  const removeAllFromCart = () => {
    setCart([])
  }

  //ToggleCartItem
  const toggleCartItem = (product) => {
    let productToDelete = cart.find((item) => item.id === product.id)
    if (productToDelete) {
      setCart(cart.filter((item) => item.id != productToDelete.id))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  //Add/ remove from wishlist
  const addToWishlist = (product) => {
    setWishList([...wishList, product])
  }
  const removeFromWishList = (product) => {
    const productToDelete = cart.find((item) => item.id === product.id)
    setWishList(wishList.filter((item) => item.id != product.id))
  }
  //Toggle wishlist item
  const toggleWishListItem = (product) => {
    let productToDelete = wishList.find((item) => item.id === product.id)
    if (productToDelete) {
      setWishList(wishList.filter((item) => item.id != productToDelete.id))
    } else {
      setWishList([...wishList, product])
    }
  }

  // Checkout stripe
  const checkout = async (cart) => {
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
      })
      const data = await res.json()
      const url = data.url
      window.location = url
      setCart([])
    } catch (error) {
      console.error('There was an error creating the checkout session!', error)
    }
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        cart,
        setCart,
        wishList,
        setWishList,
        addToCart,
        removeFromCart,
        toggleCartItem,
        addToWishlist,
        removeFromWishList,
        toggleWishListItem,
        removeAllFromCart,
        page,
        totalPages,
        count,
        prevPage,
        nextPage,
        firstPage,
        lastPage,
        getBooks,
        getBooksByAuthor,
        getBooksByCountry,
        authors,
        countries,
        checkout
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}
