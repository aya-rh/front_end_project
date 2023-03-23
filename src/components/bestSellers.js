import ProductList from "./ProductList";

const BestSellers = ({ products, deleteProduct }) => {
  return (
    <div className="products-div">
      <h2>Our Bestsellers</h2>
      <p>Take a look at our bestselling products!</p>
      <div className="products">
        <ProductList
          key={"bestsellers"}
          products={products}
          deleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
};
export default BestSellers;
