import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import FeaturedGallery from "../components/FeaturedGallery";
import { useMetaTags } from "../hooks/useMetaTags";






export const Home = () => {

  const { t} = useTranslation();

  useMetaTags({
    titleKey: "seo.homeTitle",
    descriptionKey: "seo.homeDescription",
    image: "https://mejoresdestinos.com.ar/img/bariloche.jpg",
    baseUrl: "https://mejoresdestinos.com.ar",
  });

  

  return (
    <section className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">{t("destinations")}</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        {t("home_intro")}
      </p>
      <Hero/>
      <FeaturedGallery/>
    </section>
  )
}
