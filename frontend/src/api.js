const BASE_URL = "http://localhost:5000";

export async function fetchSummary() {
  const res = await fetch(`${BASE_URL}/summary`);
  if (!res.ok) throw new Error("API error");
  return res.json();
}