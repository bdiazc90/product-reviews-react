import { useState } from "react";

import Product from "./components/Product";
import AddProduct from "./components/AddProduct";

import initial_products from "./data/products.json";

function App() {

  const [products, setProducts] = useState(initial_products);
  
  const [modalProduct, setModalProduct] = useState(false);

  const abrirModal = () => {
    setModalProduct(true);
  }

	return (
		<>
			<nav>
				<a href="#">Home</a>
				<a href="#">Settings</a>
			</nav>

			<main>
				<section className="products-container">
					<div className="actions">
						<h2>Productos</h2>
						<button onClick={abrirModal} id="add-product-btn">Añadir Producto</button>
					</div>

					<div id="product-list">
            {products.map(product => (
              <Product key={product.id} name={product.name} brand={product.brand} image={product.image} reviews={product.reviews} />
            ))}
          </div>
				</section>
				<section className="reviews-container">
					<div className="actions">
						<h2>Reseñas del Producto</h2>
						<button id="add-review-btn" disabled>
							Añadir Reseña
						</button>
					</div>

					<div id="selected-product"></div>
					<div id="review-list"></div>
				</section>
			</main>
      {/* App.jsx es el Parent Component */}
      {/* AddProduct.jsx es el Child Component */}
      <AddProduct modalProduct={modalProduct} setModalProduct={setModalProduct} products={products} chancarListaDeProductos={setProducts} />
			
		</>
	);
}

export default App;
