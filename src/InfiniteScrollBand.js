import React, { useEffect, useState } from 'react';
import './InfiniteScrollBand';

const InfiniteScrollBand = () => {
  const [data, setData] = useState([]); // État pour stocker les données JSON
  const [isLoading, setIsLoading] = useState(true); // État pour indiquer si les données sont en cours de chargement

  // Fonction pour simuler le chargement des données JSON (vous pouvez l'adapter à votre source de données réelle)
  const fetchData = () => {
    // Ici, vous pouvez effectuer une requête HTTP ou récupérer des données JSON à partir d'une autre source
    // Dans cet exemple, nous utilisons un délai de 2 secondes pour simuler le chargement des données
    setTimeout(() => {
      const jsonData = [
        { id: 1, name: 'Donnée 1' },
        { id: 2, name: 'Donnée 2' },
        { id: 3, name: 'Donnée 3' },
        // ... Ajoutez les autres données JSON ici
      ];
      setData(jsonData);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchData(); // Charger les données lors du montage initial du composant
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Chargement en cours...</div>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InfiniteScrollBand;
