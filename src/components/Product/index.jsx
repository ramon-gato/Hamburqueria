import { Button } from "../../Style";
import { LiProduct } from "./style";

const Product = ({ product, handleClick }) => {
  return (
    <LiProduct>
      <img className="logo_produto" src={product.img} alt={product.name} />

      <div className="container_infos">
        <h2>{product.name}</h2>
        <span>{product.category}</span>
        <p>R$ {product.price}</p>
        <Button type="submit" onClick={() => handleClick(product.id)}>
          Adicionar
        </Button>
      </div>
    </LiProduct>
  );
};

export default Product;
