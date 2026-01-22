"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddItemForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    brand: "",
    rating: "",
    stock: "",
    description: "",
    features: "",
    image: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        ...form,
        price: Number(form.price),
        rating: Number(form.rating),
        stock: Number(form.stock),
        features: form.features.split(",").map((f) => f.trim()),
      };
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        toast.success("Item Added Successfully!");
        router.push("/items");
      }
    } catch (error) {
      toast.error("Failed to add item");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-base-100 py-10">
      <div className="max-w-5xl mx-auto p-8 bg-base-200 rounded-xl shadow-xl border border-base-300">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold">Add New Item</h1>
          <Link href={"/items"} className="btn btn-outline btn-sm">
            Back to Items
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Item Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Apple iPhone 15"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="999"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="select w-full"
                required
              >
                <option value="">All categories</option>
                <option value="Mobile">Mobile</option>
                <option value="Laptop">Laptop</option>
                <option value="Accessories">Accessories</option>
                <option value="Audio">Audio</option>
                <option value="Smart Watch">Smart Watch</option>
                <option value="Camera">Camera</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Brand</label>
              <input
                type="text"
                name="brand"
                value={form.brand}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Apple"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Rating</label>
              <input
                type="number"
                name="rating"
                value={form.rating}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder=" 4.5"
                step="0.1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Stock</label>
              <input
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder=" 25"
                required
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                rows="6"
                placeholder="Write a detailed description of the item..."
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Features</label>
              <textarea
                name="features"
                value={form.features}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                rows="4"
                placeholder="Add features separated by commas. Example: Fast, Lightweight, 5G"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={form.image}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Example: https://example.com/image.jpg"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full mt-2"
            >
              {loading ? "Adding..." : "Add Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemForm;
