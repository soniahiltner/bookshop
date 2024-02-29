import Pagination from '../../components/Pagination/Pagination'
import StoreItems from '../../components/StoreItems/StoreItems'

import styles from './Store.module.css'

const Store = () => {
  return (
    <div className={styles.store}>
      <Pagination />
      <StoreItems />
      <Pagination />
    </div>
  )
}

export default Store
