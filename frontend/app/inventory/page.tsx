import ProductTable from "@/components/inventory/ProductTable";
import DashboardCards from "@/components/inventory/DashboardCards";

export default function InventoryPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-10">
      <h1 className="text-5xl font-bold">
        Inventory Management System
      </h1>

      <p className="mt-3 text-zinc-400">
        FastAPI • SQLite • SQLAlchemy • Next.js
      </p>

      <div className="mt-10">
        <DashboardCards />
        <ProductTable />
      </div>
    </main>
  );
}