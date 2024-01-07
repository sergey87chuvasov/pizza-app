import { useEffect, useState } from 'react';
import Heading from '../../components/Heading/Heading';
// import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import axios, { Axios, AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

export function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [error, setError] = useState<string | undefined>();

  const getMenu = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
      setProducts(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        setError(e.message);
      }
      setIsLoading(false);
      return;
    }
    // try {
    //   const res = await fetch(`${PREFIX}/products`);
    //   if (!res.ok) {
    //     return;
    //   }
    //   const data = (await res.json()) as Product[];
    //   setProducts(data);
    // } catch (e) {
    //   console.error(e);
    //   return
    // }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className={styles['head']}>
        <Heading>Menu</Heading>
        <Search placeholder='Введите блюдо или состав' />
      </div>
      <div>
        {error && { error }}
        {!isLoading && <MenuList products={products} />}
        {isLoading && <>Загружаем продукты...ждите...</>}
      </div>
    </>
  );
}

export default Menu;
