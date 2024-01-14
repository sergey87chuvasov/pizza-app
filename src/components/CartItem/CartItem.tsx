import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import { CartItemProps } from './CartItem.props';

function CartItem(props: CartItemProps) {
  const dispatch = useDispatch<AppDispath>();

  const increase = () => {
    dispatch(cartActions.add(props.id));
  };

  const decrease = () => {
    dispatch(cartActions.add(props.id));
  };

  const remove = () => {
    dispatch(cartActions.add(props.id));
  };

  return (
    <div className={styles['item']}>
      <div
        className={styles['image']}
        style={{ backgroundImage: `url('${props.image}')` }}
      ></div>
      <div className={styles['description']}>
        <div className={styles['name']}>{props.name}</div>
        <div className={styles['currency']}> {props.price}&nbsp;₽</div>
      </div>
      <div className={styles['actions']}>
        <button className={styles['button']} onClick={decrease}>
          <img src='/cart-button-icon.svg' alt='Удалить из корзины' />
        </button>
        {props.count}
        <button className={styles['button']} onClick={increase}>
          <img src='/cart-button-icon.svg' alt='Добавить в корзину' />
        </button>
        <button className={styles['remove']} onClick={remove}>
          <img src='/cart-button-icon.svg' alt='Удалить из корзины' />
        </button>
      </div>
    </div>
  );
}

export default CartItem;