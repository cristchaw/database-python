"use client";

import { useEffect, useRef, useState } from "react";
import ProductForm from "./ProductForm";
import API_URL from "@/services/api";
import { Product } from "@/types/product";
import toast from "react-hot-toast";

export default function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [editingProduct, setEditingProduct] =
    useState<Product | null>(null);

  const [search, setSearch] = useState("");
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

    async function loadProducts() {
    const url =
    search.trim() === ""
    ? `${API_URL}/products/`
    : `${API_URL}/products/?search=${encodeURIComponent(search)}`;

    const res = await fetch(url);

    const data = await res.json();

    setProducts(data);
    }

    useEffect(() => {
    if (debounceRef.current) {
        clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
        loadProducts();
    }, 300);

    return () => {
        if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        }
    };
    }, [search]);

    useEffect(() => {
    loadProducts();
    }, []);

  async function handleDelete(id: number) {
    const confirmed = confirm(
      "Delete this product?"
    );

    if (!confirmed) return;

    try {
      const res = await fetch(
        `${API_URL}/products/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      toast.success(
        "Product deleted successfully!"
      );

      if (
        editingProduct &&
        editingProduct.id === id
      ) {
        setEditingProduct(null);
      }

      loadProducts();
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to delete product."
      );
    }
  }

  return (
    <>
      <ProductForm
        product={editingProduct}
        onSuccess={loadProducts}
        onCancel={() =>
          setEditingProduct(null)
        }
      />

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
        <input
          type="text"
          placeholder="🔍 Search product..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none transition focus:border-cyan-500"
        />
      </div>

      <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900">
        <table className="min-w-[650px] w-full">
          <thead className="bg-zinc-800">
            <tr>
              <th className="p-4 text-left">
                Product
              </th>

              <th className="p-4 text-left">
                Stock
              </th>

              <th className="p-4 text-left">
                Price
              </th>

              <th className="p-4 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="py-16 text-center"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-6xl">
                      📦
                    </div>

                    <h2 className="text-xl font-semibold">
                      No Products
                    </h2>

                    <p className="text-zinc-500">
                      Add your first product to start managing inventory.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr
                  key={product.id}
                  className="border-t border-zinc-800"
                >
                  <td className="p-4">
                    {product.name}
                  </td>

                  <td className="p-4">
                    {product.stock}
                  </td>

                  <td className="p-4">
                    Rp{" "}
                    {product.price.toLocaleString(
                      "id-ID"
                    )}
                  </td>

                  <td className="space-x-2 p-4 text-center">
                    <button
                      onClick={() =>
                        setEditingProduct(product)
                      }
                      className="rounded bg-amber-500 px-3 py-1 text-sm font-semibold text-black transition hover:opacity-90"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(product.id)
                      }
                      className="rounded bg-red-600 px-3 py-1 text-sm font-semibold transition hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}