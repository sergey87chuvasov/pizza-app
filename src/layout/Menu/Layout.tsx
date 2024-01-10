import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { getProfile, userActions } from '../../store/user.slice';
import { useEffect } from 'react';

export function Layout() {
  const navigate = useNavigate();
  const dispath = useDispatch<AppDispath>();
  const profile = useSelector((s: RootState) => s.user.profile);

  useEffect(() => {
    dispath(getProfile());
  }, [dispath]);

  const logout = () => {
    dispath(userActions.logout());
    navigate('auth/login');
  };

  return (
    <div className={styles['layout']}>
      <div className={styles['sidebar']}>
        <div className={styles['user']}>
          <img
            className={styles['avatar']}
            src='/avatar.png'
            alt='avatar-pic'
          />
          <div className={styles['name']}>{profile?.name}</div>
          <div className={styles['email']}>{profile?.email}</div>
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
        <Button className={styles['exit']} onClick={logout}>
          <img src='/exit-icon.svg' alt='exit-icon-pic' />
          Выйти
        </Button>
      </div>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
}
