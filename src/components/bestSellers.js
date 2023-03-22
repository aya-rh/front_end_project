import ProductList from "./ProductList";

const BestSellers = ({ products, deleteProduct }) => {
  return (
    <div>
      <h2>BestSellers:</h2>
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
