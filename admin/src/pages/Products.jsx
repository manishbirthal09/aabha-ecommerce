import { useEffect, useState } from "react";
import api from "../api/axios";
import AdminLayout from "../components/AdminLayout";
import ProductForm from "./ProductForm";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    const { data } = await api.get("/products",  { params: { limit: 1000 } });
    setProducts(data.products);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this product?")) return;
    await api.delete(`/products/${id}`);
    fetchProducts();
  };

  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
          className="bg-charcoal text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto"
          >
          + Add Product
        </button>
      </div>

      {loading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
  <table className="min-w-212.5 w-full text-sm">
          <thead className="bg-gray-100 text-left text-gray-600">
            <tr>
              <th className="p-3 whitespace-nowrap">Image</th>
              <th className="p-3 whitespace-nowrap">Name</th>
              <th className="p-3 whitespace-nowrap">Category</th>
              <th className="p-3 whitespace-nowrap">Price</th>
              <th className="p-3 whitespace-nowrap">Discount Price</th>
              <th className="p-3 whitespace-nowrap">Stock</th>
              <th className="p-3 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="border-t">
                <td className="p-3">
                      <div className="flex gap-3 flex-wrap">
                  {p.images?.[0]?.url || p.images?.[0] ? (
                    <img
                      src={p.images[0].url || p.images[0]}
                      alt={p.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                  ) : null}
                  </div>
                </td>
                <td className="p-3 whitespace-nowrap">{p.name}</td>
                <td className="p-3 whitespace-nowrap text-gray-500">{p.category?.name}</td>
                <td className="p-3 whitespace-nowrap">₹{p.price}</td>
                <td className="p-3 whitespace-nowrap">{p.discountPrice ? `₹${p.discountPrice}` : "N/A"}</td>
                <td className="p-3 whitespace-nowrap">{p.stock}</td>
                <td className="p-3 whitespace-nowrap space-x-3">
                  <button
                    onClick={() => {
                      setEditing(p);
                      setShowForm(true);
                    }}
                    className="text-blue-600"
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(p._id)} className="text-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
      )}

      {showForm && (
        <ProductForm
          product={editing}
          onClose={() => setShowForm(false)}
          onSaved={() => {
            setShowForm(false);
            fetchProducts();
          }}
        />
      )}
    </AdminLayout>
  );
}