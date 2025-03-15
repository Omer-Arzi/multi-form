export const saveToLocalStorage = <T>(key: string, data: T) => {
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(data));
    }
  } catch (e) {
    console.log(e);
  }
};

export const getFromLocalStorage = <T>(key: string, defaultValue: T) => {
  try {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : defaultValue;
    }
    return defaultValue;
  } catch (e) {
    console.log(e);
  }
};
