import { Fragment, useEffect, useRef, useState } from 'react';

import Button from '../components/Elements/Button';
import CardProduct from '../components/Fragments/CardProduct';
import Counter from '../components/Fragments/Counter';

const products = [
  {
    id: 1,
    name: 'Sepatu Baru',
    price: 1000000,
    image: '/images/shoes-1.jpg',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt nam
    impedit labore magnam inventore veniam praesentium voluptatem facere
    cumque eveniet? Aspernatur eaque incidunt provident officia deleniti!
    Quasi qui nobis sed!`,
  },
  {
    id: 2,
    name: 'Sepatu Lama',
    price: 500000,
    image: '/images/shoes-1.jpg',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: 'Sepatu ',
    price: 200000,
    image: '/images/shoes-1.jpg',
    description: `Lorem ipsum dolor, sit amet adipisicing elit.`,
  },
];

const email = localStorage.getItem('email');

function ProductPage(props) {
  const [cart, setCart] = useState([]); // disini parameter item
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // didmount
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []); // kalau kosong depedencynya jadi DIDMOUNT

  useEffect(() => {
    // didupdate
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.quantity;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]); // perubahan apa yang akan kita pantau, jadi ketika cart berubah maka sya akan mengupdate total price

  function handleLogout() {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
  }

  function handleAddToCart(id) {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }
  }

  // USE REF
  const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);

  function handleAddToCartRef(id) {
    cartRef.current = [...cartRef.current, { id, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(cartRef.current));
  }

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = 'table-row';
    } else {
      totalPriceRef.current.style.display = 'none';
    }
  }, [cart]);

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                    <td>{item.quantity}</td>
                    <td>{(item.quantity * product.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3} className="font-bold">
                  Total Price
                </td>
                <td className="font-bold"> {totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 })} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-5 mb-5 flex justify-center">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
}

export default ProductPage;
