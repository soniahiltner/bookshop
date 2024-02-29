import styles from './Pagination.module.css'
import { useBooks } from '../../context/BooksContext'

const Pagination = () => {
  const { prevPage, nextPage, firstPage, lastPage, page, totalPages } = useBooks()

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    })
  }
  
  return (
    <div className={styles.pagination}>
      <div className={styles.paginationInfo}>
        {totalPages === 1 && <span>Página 1</span>}
        {totalPages > 1 && (
          <span>
            Página {page} de {totalPages}
          </span>
        )}
      </div>
      <div className={styles.paginationBtns}>
        <button
          className={`${page === 1 ? styles.disabled : ''} ${styles.pageBtn}`}
          onClick={() => {
            prevPage(page)
            goToTop()
          }}
        >
          &lt;
        </button>

        {totalPages > 2 && (
          <button
            className={`${page === 1 ? styles.disabled : ''} ${styles.pageBtn}`}
            onClick={() => {
              firstPage(page)
              goToTop()
            }}
          >
            Primera
          </button>
        )}

        {totalPages > 2 && (
          <button
            className={`${
              page === totalPages ? styles.disabled : styles.lastBtn
            } ${styles.pageBtn}`}
            onClick={() => {
              lastPage(page)
              goToTop()
            }}
          >
            Última
          </button>
        )}

        <button
          className={`${page === totalPages ? styles.disabled : ''} ${styles.pageBtn}`}
          onClick={() => {
            nextPage(page)
            goToTop()
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

export default Pagination
