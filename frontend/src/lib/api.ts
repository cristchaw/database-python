const API_URL = "http://127.0.0.1:8000";

export async function getChapters() {
  const response = await fetch(`${API_URL}/chapters`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch chapters");
  }

  return response.json();
}