export async function getDeliveries(){
  try {
    const response = await fetch(
      "https://msalehgroup.co.in/msalah/api/RestController.php?action=getDelivery",
      { cache: 'no-store' } // Disable caching for fresh data
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