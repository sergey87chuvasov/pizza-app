import Heading from '../../components/Heading/Heading';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

export function Menu() {
  return (
    <>
      <div className={styles['head']}>
        <Heading>Menu</Heading>
        <Search placeholder='Введите блюдо или состав' />
      </div>
      <div>
        <ProductCard
          id={1}
          title='Наслаждение'
          description='Салями, руккола, помидоры, перец'
          raiting={4.6}
          price={300}
          image='/product-demo.png'
        />
      </div>
    </>
  );
}
