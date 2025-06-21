import { featuredDestinations } from "../data/featured";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

export default function FeaturedGallery() {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          {t("home_featured_title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredDestinations.map(({ id, name, slug, imageUrl }) => (
            <div
              key={id}
              className="overflow-hidden rounded shadow hover:shadow-lg transition flex flex-col"
            >
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 flex flex-col items-center">
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  {name}
                </div>
                <Link
                  to={`/${lang}/destinations#${slug}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  {t("home_see_more")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
