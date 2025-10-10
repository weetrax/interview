import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useDebounce } from "./lib/utils.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Demo />
  </StrictMode>
);

interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

function Demo() {
  const [data, setData] = useState<Search[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedTitle = useDebounce(title, 500);

  useEffect(() => {
    if (debouncedTitle.trim() !== "") {
      fetchMovies(debouncedTitle);
    }
  }, [debouncedTitle]);

  const fetchMovies = async (title: string) => {
    setLoading(true);
    const url = `http://www.omdbapi.com/?apikey=${
      import.meta.env.VITE_APIKEY
    }&s=${title}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result?.Search ?? []);
    } catch (error) {
      console.error("Erreur de réseau:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchMovies(title);
  };

  return (
    <main className="bg-gray-100 hidden">
      <div className="container mx-auto p-4 min-h-screen">
        <h1 className="text-2xl font-bold text-center mb-4">
          Bienvenue sur Movie API
        </h1>
        <form onSubmit={handleSubmit} className="flex gap-x-4">
          <Input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Rechercher un film..."
          />
          <Button type="submit">Rechercher</Button>
        </form>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          {loading && (
            <div className="w-full text-center">
              <p className="text-gray-500">Chargement...</p>
            </div>
          )}
          {!loading &&
            data?.map((movie) => (
              <div key={movie?.imdbID}>
                <div className="w-2xs bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={
                      movie?.Poster !== "N/A"
                        ? movie?.Poster
                        : "placeholder.jpg"
                    }
                    alt={movie?.Title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{movie?.Title}</h2>
                    <p className="text-gray-600">Année: {movie?.Year}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
