import { useBooks } from '../../context/BooksContext'
import styles from './RemoveAllFromCart.module.css'

const RemoveAllFromCart = () => {
  const { removeAllFromCart } = useBooks()

  return (
    <div className={styles.removeAll}>
      <button
        className={styles.removeAllFromCart}
        onClick={() => removeAllFromCart()}
      >
        Vaciar el carrito
      </button>
    </div>
  )
}

export default RemoveAllFromCart
