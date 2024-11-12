import { useState } from "react";

import { Modal, Button } from "react-bootstrap";
import Product from "./components/Product";

import products from "./data/products.json";

function App() {

  // const [openModalProduct, setOpenModalProduct] = useState(false);

  // useState es una función que me permite crear una caja que permanecerá en el estado de mi componente:
  const [modalProduct, setModalProduct] = useState(false);
  // caja = Variable que almacenerá el valor del estado.
  // actualizarCaja = Función que permite actualizar el valor .

  



	const handleClose = () => {
		console.log("closed!");
    setModalProduct(false);
	};

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

			<Modal show={modalProduct} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Nuevo Producto</Modal.Title>
				</Modal.Header>
				<Modal.Body>

        </Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setModalProduct(false)}>
						Cerrar
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Agregar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default App;
