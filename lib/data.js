const BASE_URL = "https://msalehgroup.co.in/msalah/api";

export async function getDeliveries() {
  try {
    const response = await fetch(
      `${BASE_URL}/RestController.php?action=getDelivery`
    );
    if (!response.ok) {
      console.error("Failed to fetch deliveries:", response.statusText);
      return [];
    }
    const data = await response.json();
    if (!Array.isArray(data.output)) {
      console.error("Fetched data is not an array:", data.output);
      return [];
    }
    return data.output;
  } catch (error) {
    console.error("Error fetching deliveries:", error);
    return [];
  }
}
