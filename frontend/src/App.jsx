import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
  // const [loading, products, error] = customFetch("/api/products");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await axios.get("/api/products?name=" + search, {
          signal: controller.signal,
        });
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request cancelled", err);
          return
        }
        setError(true);
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [search]);
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something Went wrong</h1>}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <h2>No. of products are : {products.length}</h2>
    </>
  );
}

export default App;
