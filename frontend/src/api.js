const API_BASE_URL = "http://127.0.0.1:5000"; 
export async function fetchSummary() {
  const res = await fetch(`${API_BASE_URL}/summary`);
  if (!res.ok) throw new Error("Failed to fetch summary");
  return res.json();
}

export async function fetchFindings() {
  const res = await fetch(`${API_BASE_URL}/findings`);
  if (!res.ok) throw new Error("Failed to fetch findings");
  return res.json();
}

export const triggerScan = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/scan/s3`, {
      method: 'GET'
    });
    if (!response.ok) throw new Error('Failed to trigger scan');
    return await response.json();
  } catch (error) {
    console.error('Error triggering scan:', error);
    throw error;
  }
};

export const triggerFullScan = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/scan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) throw new Error('Failed to trigger full scan');
    return await response.json();
  } catch (error) {
    console.error('Error triggering full scan:', error);
    throw error;
  }
};
