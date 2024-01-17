import Button from '../Elements/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CardProduct(props) {
  const { children } = props;
  return <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">{children}</div>;
}

function Body(props) {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-2xl font-semibold tracking-tight text-white mb-5">{name.substring(0, 20)}...</h5>
        <p className="text-m text-white">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
}

function Header(props) {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover" />
    </Link>
  );
}

function Footer(props) {
  const { price, handleAddToCart, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex item-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add To Chart
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
