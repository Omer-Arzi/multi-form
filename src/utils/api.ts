const API_URL = "http://localhost:5000/api";

export const fetchPlans = async () => {
  const response = await fetch(`${API_URL}/plans`);
  if (!response.ok) throw new Error("Failed to fetch plans");
  return response.json();
};

export const fetchAddons = async () => {
  const response = await fetch(`${API_URL}/addons`);
  if (!response.ok) throw new Error("Failed to fetch addons");
  return response.json();
};

export async function submitForm(formData: any) {
  try {
    const response = await fetch(`${API_URL}/users/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return await response.json();
  } catch (error) {
    console.error("❌ Submission Error:", error);
    throw error;
  }
}
