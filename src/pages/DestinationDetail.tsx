
import { useParams, Navigate } from 'react-router-dom';
import { destinations } from '../data/destinations';

export const DestinationDetail = () => {
  const { slug } = useParams();

  // Buscar destino por slug
  const destination = destinations.find(dest => dest.slug === slug);

  if (!destination) {
    // Si no existe destino con ese slug, redirige a NotFound o muestra mensaje
    return <Navigate to="/notfound" replace />;
    // o simplemente:
    // return <h2>Destino no encontrado</h2>;
  }

  return (
    <div className="destination-detail p-4">
      <h1 className="text-3xl font-bold mb-4">{destination.nameKey}</h1>
      <p>{destination.descriptionKey}</p>
      {/* Aquí puedes agregar más detalles, imágenes, mapas, etc */}
    </div>
  );
};
