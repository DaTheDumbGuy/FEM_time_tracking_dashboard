export const fetchData = async () => {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data " + error);
  }
};
