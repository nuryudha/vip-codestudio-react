import { Fragment, useEffect, useRef, useState } from 'react';

import Button from '../components/Elements/Button';
import CardProduct from '../components/Fragments/CardProduct';
import Counter from '../components/Fragments/Counter';
import { getProduct } from '../services/product.service';
import { getUsername } from '../services/auth.service';
import { useLogin } from '../hooks/useLogin';

function ProductPage(props) {
  const [cart, setCart] = useState([]); // disini parameter item
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []); // kalau kosong depedencynya jadi DIDMOUNT

  useEffect(() => {
    getProduct((data) => {
      console.log(data);
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.quantity;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, products]); // perubahan apa yang akan kita pantau, jadi ketika cart berubah maka sya akan mengupdate total price DIDUPDATE

  function handleLogout() {
    localStorage.removeItem('token');
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
      <div className="flex justify-end h-20 bg-blue-600 text-white font-bold items-center px-10">
        {username}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
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
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 20)}...</td>
                      <td>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                      <td>{item.quantity}</td>
                      <td>{(item.quantity * product.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3} className="font-bold">
                  Total Price
                </td>
                <td className="font-bold"> {totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
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
