"use client";

import { useEffect, useState } from "react";

import { Product } from "@/types/product";

import toast from "react-hot-toast";

interface Props {
  product: Product | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function ProductForm({
  product,
  onSuccess,
  onCancel,
}: Props) {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setStock(product.stock.toString());
      setPrice(product.price.toString());
    } else {
      setName("");
      setStock("");
      setPrice("");
    }
  }, [product]);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const body = {
      name,
      stock: Number(stock),
      price: Number(price),
    };

    try {
      let res: Response;

      if (product) {
        res = await fetch(
          `http://127.0.0.1:8000/products/${product.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
      } else {
        res = await fetch(
          "http://127.0.0.1:8000/products/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
      }

      if (!res.ok) {
        throw new Error("Request failed");
      }

      toast.success(
        product
          ? "Product updated successfully!"
          : "Product created successfully!"
      );

      setName("");
      setStock("");
      setPrice("");

      onSuccess();
      onCancel();
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to save product."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">
          {product ? "Edit Product" : "Add Product"}
        </h2>

        {product && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-zinc-700 px-4 py-2"
          >
            Cancel
          </button>
        )}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg bg-zinc-800 p-3 outline-none"
          required
        />

        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="rounded-lg bg-zinc-800 p-3 outline-none"
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="rounded-lg bg-zinc-800 p-3 outline-none"
          required
        />
      </div>

      <button
      className="mt-6 w-full rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400 lg:w-auto"
      >
        {product ? "Update Product" : "Save Product"}
      </button>
    </form>
  );
}