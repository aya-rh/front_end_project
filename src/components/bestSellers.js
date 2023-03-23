import ProductList from "./ProductList";

const BestSellers = ({ products, deleteProduct }) => {
  return (
    <div>
      <h2>Our Bestsellers</h2>
      <p></p>
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
