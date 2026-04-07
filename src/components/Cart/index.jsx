const Cart = ({ itemCarrinho, removeItem, removeAll }) => {
  if (itemCarrinho.length === 0) {
    return (
      <section>
        <div>
          <p>Carrinho de compras</p>
        </div>
        <div>
          <p>Seu carrinho está vazio</p>
          <span>Adicione item</span>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <div>
          <p>Carrinho de compras</p>
        </div>
        <ul>
          {itemCarrinho.map((product) => (
            <li key={product.id}>
              <img src={product.img} alt={product.name} />
              <div>
                <h2>{product.name}</h2>
                <span>{product.category}</span>
              </div>
              <button onClick={() => removeItem(product.id)}>Remover</button>
            </li>
          ))}
        </ul>
        <div>
          <p>Total</p>
          <span>
            R${itemCarrinho.reduce((acc, cur) => acc + cur.price, 0).toFixed(2)}
          </span>
          <button onClick={removeAll}>Remover todos</button>
        </div>
      </section>
    );
  }
};
export default Cart;
