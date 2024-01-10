import CardProduct from "../components/Fragments/CardProduct";

function ProductPage(props) {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt nam
          impedit labore magnam inventore veniam praesentium voluptatem facere
          cumque eveniet? Aspernatur eaque incidunt provident officia deleniti!
          Quasi qui nobis sed!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
    </div>
  );
}

export default ProductPage;
