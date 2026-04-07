import { useEffect, useState } from "react";
import api from "./services/api";
import logo from "./assets/logo.jpg";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { Header, Button } from "./Style";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [itemCarrinho, setItemCarrinho] = useState([]);

  useEffect(() => {
    api.get("/products").then((resp) => setProducts(resp.data));
  }, []);

  function showProducts(item) {
    if (item === "") {
      setFiltered([...products]);
    } else {
      const filter = products.filter(
        (product) =>
          product.category.toLowerCase().includes(item.toLowerCase()) ||
          product.name.toLowerCase().includes(item.toLowerCase())
      );
      setFiltered(filter);
    }
  }

  function handleClick(productId) {
    let count = 0;
    itemCarrinho.map((elemt) => elemt.id === productId && count++);
    products.find(
      (product) =>
        product.id === productId && setItemCarrinho([...itemCarrinho, product])
    );
  }

  function removeItem(productId) {
    const remove = itemCarrinho.filter((product) => product.id !== productId);
    setItemCarrinho(remove);
  }

  function removeAll() {
    setItemCarrinho([]);
  }

  return (
    <>
      <Header>
        <img className="logo" src={logo} alt="logo burguer kenzie" />
        <div>
          <input
            className="input_pesquisa"
            type="text"
            placeholder="Digite sua pesquisa"
            onChange={(event) => showProducts(event.target.value)}
          />
          <Button type="submit">Pesquisar</Button>
        </div>
      </Header>
      <main>
        <ProductList
          products={products}
          filtered={filtered}
          handleClick={handleClick}
        />

        <Cart
          itemCarrinho={itemCarrinho}
          setItemCarrinho={setItemCarrinho}
          removeItem={removeItem}
          removeAll={removeAll}
        />
      </main>
    </>
  );
};

export default App;
