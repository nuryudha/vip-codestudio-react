import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";

function handleLogout() {
  localStorage.removeItem("token");
  window.location.href = "/login";
}
function Navbar() {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

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
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        {totalCart}
      </div>
    </div>
  );
}

export default Navbar;
