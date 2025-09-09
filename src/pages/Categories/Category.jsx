import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Card from "../../components/Cards/Cards";

const categoryMap = {
  "laptop+tablete+telefoane": ["laptop", "tableta", "telefon"],
  "gaming+accesorii": ["consola", "accesorii"],
  "pc+periferice": ["pc", "periferice", "componente"]
};

export default function Category() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const cats = categoryMap[name] || [name];
        const filtered = data.filter((p) =>
          cats.includes(p.category.toLowerCase())
        );
        setProducts(filtered);
      })
      .catch((err) => console.error("Eroare la fetch:", err));
  }, [name]);

  return (
    <div className="category-container">
      <CategoryBar />

      <div className="p-6">
        <h1 className="text-2xl font-bold text-cyan-400 mb-6">
          Categoria: {name}
        </h1>

        <div className="cards">
          {products.length > 0 ? (
            products.map((p) => <Card key={p.id} product={p} />)
          ) : (
            <p style={{ color: "white" }}>Nu există produse în această categorie.</p>
          )}
        </div>
      </div>
    </div>
  );
}