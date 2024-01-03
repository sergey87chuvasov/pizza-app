import Heading from '../../components/Heading/Heading';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

export function Menu() {
  return (
    <>
      <div className={styles['head']}>
        <Heading>Menu</Heading>
        <Search placeholder='Введите блюдо или состав' />
      </div>
    </>
  );
}
