import { getProducts } from "@/services/product";

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <main className="min-h-screen bg-zinc-950 p-10 text-white">
            <h1 className="mb-8 text-4xl font-bold">
                Inventory Products
            </h1>

            <div className="grid gap-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
                    >
                        <h2 className="text-xl font-semibold">
                            {product.name}
                        </h2>

                        <p className="mt-2 text-zinc-400">
                            Stock : {product.stock}
                        </p>

                        <p className="text-zinc-400">
                            Price : Rp {product.price.toLocaleString("id-ID")}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}