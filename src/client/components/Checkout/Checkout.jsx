import { useBooks } from '../../context/BooksContext'
import styles from './Checkout.module.css'

function Checkout() {
  const {  cart, checkout } = useBooks()

  return (
    <div className={styles.checkoutBtnContainer}>
      <button
        className={styles.checkoutBtn}
        onClick={() => checkout(cart)}
      >
        Comprar
      </button>
    </div>
  )
}

export default Checkout
