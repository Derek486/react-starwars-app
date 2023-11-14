// src/DataLoader.js

import React, { useState } from 'react';

function DataLoader() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);

    // Simulamos una petición Ajax con un retraso de 2 segundos
    setTimeout(() => {
      const newData = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
      setData(newData);
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <h1>Mi Página con React y Ajax</h1>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Cargando...' : 'Cargar Datos'}
      </button>
      <div>
        {loading ? (
          <p>Cargando datos...</p>
        ) : data.length > 0 ? (
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No hay datos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default DataLoader;
