import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";




export default function Hero() {

  const { lang } = useParams();  
  const { t } = useTranslation();

  return (
    <section className="text-center py-20 bg-gradient-to-br from-blue-100 to-blue-300 ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          {t("home_hero_title")}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          {t("home_hero_subtitle")}
        </p>
        <Link
          to={`/${lang}/destinations`}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          {t("home_hero_cta")}
        </Link>
      </div>
    </section>
  );
}
