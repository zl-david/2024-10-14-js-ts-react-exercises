import React, { useState, useEffect } from "react";

type Item = { id: number; name: string };

function SearchComponent() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (query.length === 0) return;

      try {
        setLoading(true);
        const response = await fetch(
          `https://api.example.com/search?query=${query}`
        );
        const result = await response.json();
        setData(result.items);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return <SearchComponent />;
}

export default App;
