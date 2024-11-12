export default function Product(props) {

    return (
        <article className="product-item">
            <img src={props.image} alt="" />
            <div>
                <h3>{props.name}</h3>
                <p>{props.brand}</p>
                <p>Reseñas: {props.reviews.length}</p>
            </div>
        </article>
    )
}