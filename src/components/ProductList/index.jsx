import Product from "../Product";
import { ContainerProduct } from "./style";

const ProductList = ({ products, filtered, handleClick }) => {
  if (filtered.length > 0) {
    return (
      <ContainerProduct>
        {filtered.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </ContainerProduct>
    );
  } else {
    return (
      <ContainerProduct>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </ContainerProduct>
    );
  }
};

export default ProductList;
