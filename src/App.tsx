import React from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

interface Root {
  Search: Search[];
  totalResults: string;
  Response: string;
}

interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

function App() {
  const [data, setData] = React.useState<Search[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = `http://www.omdbapi.com/?apikey=${
      import.meta.env.VITE_APIKEY
    }&s=${"TITLE"}`;
    //Écrire la fonction pour rechercher des films par titre
  };

  return (
    <main className="bg-gray-50">
      <div className="container mx-auto p-4 min-h-screen">
        <h1 className="text-2xl font-bold text-center mb-4">
          Bienvenue sur Movie API
        </h1>
        <form onSubmit={handleSubmit} className="flex gap-x-4">
          <Input type="text" placeholder="Rechercher un film..." />
          <Button type="submit">Rechercher</Button>
        </form>
        <div>
          <div className="mt-12 mb-4">
            En utilisant l'API OMDB, réaliser les tâches suivantes:
          </div>
          <ul className="list-disc pl-5">
            <li>
              Écrire la fonction pour rechercher des films par titre (API
              Search) et l'appliquer au clic du bouton "Rechercher"
            </li>
            <li>
              Créer un composant pour afficher une liste de films (titre, année
              de sortie & image)
            </li>
            <li>Afficher un loader lors du chargement des données</li>
          </ul>
        </div>
        <div>
          <div className="mt-12 mb-4">Infos utile:</div>
          <ul className="list-disc pl-5">
            <li>Clé API: {import.meta.env.VITE_APIKEY}</li>
            <li>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.omdbapi.com/"
                target="_blank"
              >
                Documentation API
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

function MovieList() {
  // Créer un composant pour afficher une liste de films
  return <div>{/* Implémentation de la liste de films */}</div>;
}

function Movie() {
  // Créer un composant pour afficher les détails d'un film
  return <div>{/* Implémentation des détails du film */}</div>;
}

export default App;
