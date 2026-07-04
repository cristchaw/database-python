export const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function getChapters() {
  const response = await fetch(`${API_URL}/chapters`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch chapters");
  }

  return response.json();
}