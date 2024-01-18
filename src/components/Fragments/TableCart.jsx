import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function TableCart(props) {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.quantity;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]); // perubahan apa yang akan kita pantau, jadi ketika cart berubah maka sya akan mengupdate total price DIDUPDATE

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
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
                <td>
                  {product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td>{item.quantity}</td>
                <td>
                  {(item.quantity * product.price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan={3} className="font-bold">
            Total Price
          </td>
          <td className="font-bold">
            {" "}
            {totalPrice.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableCart;
