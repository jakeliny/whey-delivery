import { Hero } from "./components/Hero";
import { ProductCard } from "./components/ProductCard";
import { Products } from "./styles";
import { productsData } from "../../data";

export function Home() {
  return (
    <>
      <Hero />
      <Products>
        <h2>Suplemments</h2>
        <div className="ProductsList">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </Products>
    </>
  );
}
