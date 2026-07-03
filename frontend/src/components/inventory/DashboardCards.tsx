"use client";

import { useEffect, useState } from "react";

interface DashboardData {
  total_products: number;
  total_stock: number;
  inventory_value: number;
}

export default function DashboardCards() {
  const [dashboard, setDashboard] =
    useState<DashboardData | null>(null);

  useEffect(() => {
    async function loadDashboard() {
      const res = await fetch(
        "http://127.0.0.1:8000/dashboard/"
      );

      const data = await res.json();

      setDashboard(data);
    }

    loadDashboard();
  }, []);

  if (!dashboard) return null;

  return (
    <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        title="Products"
        icon="📦"
        value={dashboard.total_products}
      />

      <Card
        title="Total Stock"
        icon="📚"
        value={dashboard.total_stock}
      />

      <Card
        title="Inventory Value"
        icon="💰"
        value={`Rp ${dashboard.inventory_value.toLocaleString(
          "id-ID"
        )}`}
      />
    </div>
  );
}

interface CardProps {
  title: string;
  value: string | number;
  icon: string;
}

function Card({
  title,
  value,
  icon,
}: CardProps) {
  return (
    <div className="flex min-h-[150px] flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-3xl">
          {icon}
        </span>

        <span className="text-sm text-zinc-500">
          {title}
        </span>
      </div>

      <h2 className="break-words text-2xl font-bold lg:text-3xl">
        {value}
      </h2>
    </div>
  );
}