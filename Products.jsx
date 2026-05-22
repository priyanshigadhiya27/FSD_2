import ProductCard from "./ProductCard";

function Products() {
  const products = [
    {
      id: 1,
      title: "Laptop",
      price: 50000,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },

    {
      id: 2,
      title: "Mobile",
      price: 20000,
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
  ];

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Products;