import API_URL from "./api";
import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(
        `${API_URL}/products`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return response.json();
}