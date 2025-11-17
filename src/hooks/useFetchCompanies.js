import { useState, useEffect } from 'react';

export default function useFetchCompanies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const response = await fetch('/companies.json');

        if (!response.ok) {
          throw new Error('Failed to load companies.json');
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCompanies();
  }, []);

  return { data, loading, error };
}
