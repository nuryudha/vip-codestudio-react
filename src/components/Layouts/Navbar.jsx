import { useContext, useEffect, useState } from 'react';

import Button from '../Elements/Button';
import { DarkMode } from '../../context/DarkMode';
import { useLogin } from '../../hooks/useLogin';
import { useSelector } from 'react-redux';
import { useTotalPrice } from '../../context/TotalPriceContext';

function handleLogout() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}
function Navbar() {
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    // ini saaat dirender menajalankan fungsi di dalamnya
    const sum = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0); // dimulai dari indeks ke 0
    setTotalCart(sum);
  }, [cart]); // mengecelk data di dalam [] udah ada belum

  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white font-bold items-center px-10">
      {username}
      <Button classname="ml-5 bg-black" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5 ">
        Item : {totalCart} | price : $ {total}
      </div>
      <Button className="bg-black px-10 mx-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? 'Light' : 'Dark'}
      </Button>
    </div>
  );
}

export default Navbar;
