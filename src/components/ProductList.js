import Product from "./Product";

const ProductList = ({ productsByCategory }) => {
  const productComponents = productsByCategory.map((product) => {
    return <Product key={product.id} product={product} />;
  });

  return <>{productComponents}</>;
};

export default ProductList;
