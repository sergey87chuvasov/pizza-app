import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';

export function Layout() {
  return (
    <div className={styles['layout']}>
      <div className={styles['sidebar']}>
        <div className={styles['user']}>
          <img
            className={styles['avatar']}
            src='/avatar.png'
            alt='avatar-pic'
          />
          <div className={styles['name']}>Serge Wis</div>
          <div className={styles['email']}>serge@wis.gmail.com</div>
        </div>
        <div className={styles['menu']}>
          <NavLink
            to='/'
            className={({ isActive }) =>
              cn(styles['link'], {
                [styles.active]: isActive,
              })
            }
          >
            <img src='/menu-icon.svg' alt='menu-icon-pic' />
            Меню
          </NavLink>
          <NavLink
            to='/cart'
            className={({ isActive }) =>
              cn(styles['link'], {
                [styles.active]: isActive,
              })
            }
          >
            <img src='/cart-icon.svg' alt='cart-icon-pic' />
            Корзина
          </NavLink>
        </div>
        <Button className={styles['exit']}>
          <img src='/exit-icon.svg' alt='exit-icon-pic' />
          Выйти
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
