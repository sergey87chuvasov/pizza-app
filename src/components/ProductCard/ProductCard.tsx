import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';

function ProductCard(props: ProductCardProps) {
  return (
    <Link to={`/product/${props.id}`} className={styles['link']}>
      <div className={styles['card']}>
        <div
          className={styles['head']}
          style={{ backgroundImage: `url('${props.image}')` }}
        >
          <div className={styles['price']}>
            {props.price}&nbsp;<span className={styles['currency']}>RUB</span>
          </div>
          <button className={styles['add-to-cart']}>
            <img src='/cart-button-icon.svg' alt='cart-button-icon' />
          </button>
          <div className={styles['raiting']}>
            {props.raiting}&nbsp;
            <img src='/star-icon.svg' alt='star-icon' />
          </div>
        </div>
        <div className={styles['footer']}>
          <div className={styles['title']}>{props.name}</div>
          <div className={styles['description']}>{props.description}</div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
