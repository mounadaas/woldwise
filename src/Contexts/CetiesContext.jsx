import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const CetiesContext = createContext();
const BASE_URL = "https://mounadaas.github.io/jsonapi/question.json";
function CetiesProvider({ children }) {
  const [ceties, setCeties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/ceties`);
        const data = await res.json();
        setCeties(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const getCity = useCallback(async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/ceties/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  }, []);

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/ceties`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCeties((ceties) => [...ceties, data]);
    } catch {
      alert("There was an error creating city.");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/ceties/${id}`, {
        method: "DELETE",
      });

      setCeties((ceties) => ceties.filter((city) => city.id !== id));
    } catch {
      alert("There was an error deleting city");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CetiesContext.Provider
      value={{
        ceties,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CetiesContext.Provider>
  );
}
function useCeties() {
  const context = useContext(CetiesContext);
  return context;
}

export { CetiesProvider, useCeties };
