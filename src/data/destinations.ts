export interface Destination {
  id: number;
  slug: string;
  nameKey: string;         // clave para traducción, ej: "paris"
  descriptionKey: string;  // clave para traducción, ej: "paris_desc"
  imageUrl: string;
  mapUrl: string;        // ruta a la imagen pública
}

export const destinations: Destination[] = [
  {
    id: 1,
    slug: "paris",
    nameKey: "paris",
    descriptionKey: "paris_desc",
    imageUrl: "/img/paris.jpg",
    mapUrl: "https://www.google.com/maps/place/París,+France"
  },
  {
    id: 2,
    slug: "new-york",
    nameKey: "new_york",
    descriptionKey: "new_york_desc",
    imageUrl: "/img/newyork.jpg",
    mapUrl: "https://www.google.com/maps/place/New+York"
  },
  {
    id: 3,
    slug: "tokyo",
    nameKey: "tokyo",
    descriptionKey: "tokyo_desc",
    imageUrl: "/img/tokio.jpg",
    mapUrl: "https://www.google.com/maps/place/Tokyo"
  },
  {
    id: 4,
    slug: "el-bolson",
    nameKey: "el_bolson",
    descriptionKey: "el_bolson_desc",
    imageUrl: "/img/elbolson.jpg",
    mapUrl: "https://www.google.com/maps/place/El+Bolson"
  },
  {
    id: 5,
    slug: "bariloche",
    nameKey: "bariloche",
    descriptionKey: "bariloche_desc",
    imageUrl: "/img/bariloche.jpg",
    mapUrl: "https://www.google.com/maps/place/San+Carlos+de+Bariloche"
  },
  {
    id: 6,
    slug: "paises-bajos",
    nameKey: "paises_bajos",
    descriptionKey: "paises_bajos_desc",
    imageUrl: "/img/paisesbajos.jpg",
    mapUrl: "https://www.google.com/maps/place/Paises+Bajos"
  },
   {
    id: 7,
    slug: "alberobello",
    nameKey: "alberobello",
    descriptionKey: "alberobello_desc",
    imageUrl: "/img/alberobello.jpg",
    mapUrl: "https://www.google.com/maps/place/Alberobello"
  },
  {
    id: 8,
    slug: "machu-picchu",
    nameKey: "machu_picchu",
    descriptionKey: "machu_picchu_desc",
    imageUrl: "/img/machupichu.jpg",
    mapUrl: "https://www.google.com/maps/place/Santuario+Hist%C3%B3rico+de+Machu+Picchu/@-13.1631936,-72.547837,17z/data=!3m1!4b1!4m6!3m5!1s0x916d9a5f89555555:0x3a10370ea4a01a27!8m2!3d-13.1631988!4d-72.5452621!16zL20vMGtyZnk?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 9,
    slug: "noruega",
    nameKey: "noruega",
    descriptionKey: "noruega_desc",
    imageUrl: "/img/noruega2.jpg",
    mapUrl: "https://www.google.com/maps/place/Noruega"
  },

  // agregá más destinos aquí
];
