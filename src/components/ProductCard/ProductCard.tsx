import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';

function ProductCard(props: ProductCardProps) {
  return (
    <div className={styles['card']}>
      <div className={styles['head']}>
        <div className={styles['price']}>
          {props.price}
          <span className={styles['currency']}>RUB</span>
        </div>
        <button className={styles['add-to-cart']}>
          <img src='/cart-button-icon.svg' alt='cart-button-icon' />
        </button>
        <div className={styles['raiting']}>
          {props.raiting}
          <img src='/star-icon.svg' alt='star-icon' />
        </div>
      </div>
      <div className={styles['footer']}>
        <div className={styles['title']}>{props.title}</div>
        <div className={styles['description']}>{props.description}</div>
      </div>
    </div>
  );
}

export default ProductCard;
