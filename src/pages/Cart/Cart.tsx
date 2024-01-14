import { useSelector } from 'react-redux';
import Heading from '../../components/Heading/Heading';
import { RootState } from '../../store/store';
import CartItem from '../../components/CartItem/CartItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';

export function Cart() {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const items = useSelector((s: RootState) => s.cart.items);

  const getItem = async (id: number) => {
    const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
    return data;
  };

  const loadAllItems = async () => {
    const res = await Promise.all(items.map((i) => getItem(i.id)));
    setCartProducts(res);
  };

  useEffect(() => {
    loadAllItems();
  }, [items]);

  return (
    <>
      <Heading>Корзина</Heading>
      {items.map((i) => {
        const product = cartProducts.find((p) => p.id === i.id);
        if (!product) {
          return;
        }
        return <CartItem count={i.count} {...product} />;
      })}
    </>
  );
}
