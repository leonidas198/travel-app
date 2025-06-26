import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import FeaturedGallery from "../components/FeaturedGallery";
import { useMetaTags } from "../hooks/useMetaTags";

export const Home = () => {
  const { t } = useTranslation();

  // Meta tags dinámicos para SEO
  useMetaTags({
    titleKey: "seo.homeTitle",
    descriptionKey: "seo.homeDescription",
    image: "https://mejoresdestinos.com.ar/img/bariloche.jpg",
    baseUrl: "https://mejoresdestinos.com.ar",
  });

  return (
    <main className="container mx-auto p-6 text-center">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-blue-700">
          {t("destinations")}
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4">
          {t("home_intro")}
        </p>
      </header>

      {/* Sección de introducción SEO friendly */}
      <section className="text-left max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          {t("home_explore_title", "Explorá los Mejores Destinos Turísticos")}
        </h2>
        <p className="text-base text-gray-700">
          {t(
            "home_explore_text",
            "Bienvenido a Mejores Destinos, tu guía confiable para descubrir los lugares más increíbles de Argentina y el mundo. Ya sea que busques naturaleza, aventura, cultura o relax, acá vas a encontrar todo lo que necesitás para planear tu próximo viaje."
          )}
        </p>
      </section>

      <Hero />

      {/* Destino destacado como bloque SEO adicional */}
      <section className="mt-16 text-left max-w-3xl mx-auto">
        <h3 className="text-xl font-medium mb-2 text-blue-700">
          {t("featured_destination_title", "Destino destacado de la semana: Bariloche")}
        </h3>
        <p className="text-base text-gray-700">
          {t(
            "featured_destination_text",
            "Con sus lagos cristalinos y montañas nevadas, Bariloche es ideal para quienes buscan aventura y paisajes inolvidables. Desde esquí en invierno hasta senderismo en verano, este destino ofrece actividades para todos los gustos. No te pierdas la oportunidad de probar su famosa gastronomía, especialmente el chocolate artesanal."
          )}
        </p>
      </section>

      <FeaturedGallery />
    </main>
  );
};
