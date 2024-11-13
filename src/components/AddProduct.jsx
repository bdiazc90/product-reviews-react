import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const initial_product = {
	id: "",
	name: "",
	brand: "",
	image: "",
	reviews: [],
};

export default function AddProduct(props) {
	const [product, setProduct] = useState(initial_product); // Nuevo Producto Temporal.

	const handleChange = (e) => {
		const newProduct = { ...product, [e.target.name]: e.target.value };
		setProduct(newProduct);
	};

	const handleSubmit = () => {
		setProduct({ ...product, id: Date.now() });
		props.chancarListaDeProductos([...props.products, product]);
		setProduct(initial_product);
		props.setModalProduct(false);
	};

	const handleClose = () => {
		console.log("closed!");
		props.setModalProduct(false);
	};

	return (
		<Modal show={props.modalProduct} onHide={handleClose}>
			<Modal.Header>
				<Modal.Title>Nuevo Producto</Modal.Title>
			</Modal.Header>
			<Modal.Body className="form">
				<input type="text" name="name" autoComplete="off" placeholder="Nombre" onChange={handleChange} value={product.name} />
				<input type="text" name="brand" autoComplete="off" placeholder="Marca" onChange={handleChange} value={product.brand} />
				<input type="text" name="image" autoComplete="off" placeholder="URL Imagen" onChange={handleChange} value={product.image} />
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => props.setModalProduct(false)}>
					Cerrar
				</Button>
				<Button variant="primary" onClick={handleSubmit}>
					Agregar
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
