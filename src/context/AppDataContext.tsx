import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { fetchPlans, fetchAddons } from "@/utils/api";

interface AppDataContextType {
  plans: any[];
  addons: any[];
  loading: boolean;
  error: string | null;
}

const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
  const [plans, setPlans] = useState<any[]>([]);
  const [addons, setAddons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [plansData, addonsData] = await Promise.all([fetchPlans(), fetchAddons()]);
        setPlans(plansData);
        setAddons(addonsData);
      } catch (err) {
        setError("Failed to load data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <AppDataContext.Provider value={{ plans, addons, loading, error }}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error("useAppData must be used within an AppDataProvider");
  }
  return context;
};
