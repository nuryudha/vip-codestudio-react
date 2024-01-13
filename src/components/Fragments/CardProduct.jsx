import Button from '../Elements/Button';

function CardProduct(props) {
  const { children } = props;
  return <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">{children}</div>;
}

function Body(props) {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-2xl font-semibold tracking-tight text-white mb-5">{name}</h5>
        <p className="text-m text-white">{children}</p>
      </a>
    </div>
  );
}

function Header(props) {
  const { image } = props;
  return (
    <a href="">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
}

function Footer(props) {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex item-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
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
