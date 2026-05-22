function ProductCard(props) {
  return (
    <div>
      <img src={props.image} alt={props.title} width="200" />

      <h2>{props.title}</h2>

      <p>Price: ₹{props.price}</p>

      <p>Rating: {props.rating}</p>
    </div>
  );
}

export default ProductCard;