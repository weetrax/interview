import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto p-4 min-h-screen">
        <h1 className="text-2xl font-bold text-center mb-4">
          Bienvenue sur Movie API
        </h1>
        <form className="flex gap-x-4">
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
              Écrire les types typescript correspondant à la réponse de l'API
              "Search" & "By ID or Title"
            </li>
            <li>
              Créer un composant pour afficher une liste de films (titre, année
              de sortie & image)
            </li>
            <li className="mb-4">
              Afficher un loader lors du chargement des données
            </li>
            <li>
              Écrire la fonction pour rechercher les détails d'un film par ID
              (API By ID)
            </li>
            <li>
              Créer un composant pour afficher les détails d'un film. Afficher
              ce composant au sein d'une modal (utiliser le composant Dialog de
              shadcn) qui s'ouvrira au clic sur un film de la liste
            </li>
            <li className="mb-4">
              Afficher un loader lors du chargement de cette données
            </li>
            <li>
              Ajouter un évènement sur l'input "Rechercher un film..." pour
              déclancher la recherche lorsque l'utilisateur tape le nom d'un
              film. Comment peut-on optimiser cette recherche pour éviter de
              faire trop de requêtes à l'API ?
            </li>
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
            <li>
              <a
                className="text-blue-500 hover:underline"
                href="https://ui.shadcn.com/docs/components/dialog"
                target="_blank"
              >
                Documentation Dialog de shadcn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
