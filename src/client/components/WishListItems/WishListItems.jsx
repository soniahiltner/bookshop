import { Link } from 'react-router-dom'
import { useBooks } from '../../context/BooksContext'
import CartButton from '../CartButton/CartButton'
import WishListButton from '../WishListButton/WishListButton'
import styles from './WishListItems.module.css'

const WishListItems = () => {
  const { wishList, removeFromWishList, toggleCartItem } = useBooks()

  return (
    <div className={styles.wishListItems}>
      {wishList.length === 0 && (
        <div className={styles.emptyWishList}>
          <h2>Tu lista de deseos está vacía.</h2>
        </div>
      )}
      {wishList.map((item) => (
        <div
          className={styles.itemCard}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <img
              src={item.img}
              alt={item.title}
            />
          </div>
          <div className={styles.itemInfo}>
            <section className={styles.headInfo}>
              <h2>{item.title}</h2>
              <h4>
                {item.author} - {item.year}
              </h4>
              <h4>Precio: {item.price}€</h4>
            </section>

            <Link
              to={`/store/${item.id}`}
              className={styles.moreInfo}
            >
              Más información
            </Link>

            <WishListButton item={item} />
            <CartButton item={item} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default WishListItems
