import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function CategoryCircles() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/categories").then(({ data }) => setCategories(data.categories));
  }, []);

  if (categories.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal mb-6 text-center">
        Shop by Category
      </h2>
      <div className="flex gap-6 overflow-x-auto pb-2 md:justify-center md:flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => navigate(`/products?category=${encodeURIComponent(cat.name)}`)}
            className="flex flex-col items-center gap-2 shrink-0 w-20"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-200 bg-gray-100">
              {cat.image?.url ? (
                <img src={cat.image.url} alt={cat.name} className="w-full h-full object-cover" />
              ) : null}
            </div>
            <span className="text-xs text-charcoal text-center">{cat.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}