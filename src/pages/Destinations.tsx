
import { useTranslation } from "react-i18next"
import { destinations } from "../data/destinations";
import { useMetaTags } from "../hooks/useMetaTags";



export const Destinations = () => {

  const { t } = useTranslation();

  useMetaTags({
    titleKey: "seo.destinationsTitle",
    descriptionKey: "seo.destinationsDescription",
    image: "https://mejoresdestinos.com.ar/img/bariloche.jpg",
    baseUrl: "https://mejoresdestinos.com.ar",
  });


  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t("welcome")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map(({ id, nameKey, descriptionKey, imageUrl, mapUrl }) => (
          <div key={id} className="bg-white rounded shadow p-4 hover:shadow-lg transition-shadow">
            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
              <img src={imageUrl} alt={t(nameKey)} className="rounded w-full h-48 object-cover mb-4" />
            </a>
            <h2 className="text-xl font-semibold mb-2">{t(nameKey)}</h2>
            <p>{t(descriptionKey)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
