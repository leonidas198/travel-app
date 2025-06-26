import { useTranslation } from "react-i18next"
import { travelTips } from "../data/travelTips";
import { useMetaTags } from "../hooks/useMetaTags";



export const TravelTips = () => {

  const { t } = useTranslation();

  useMetaTags({
    titleKey: "seo.homeTitle",
    descriptionKey: "seo.homeDescription",
    image: "https://mejoresdestinos.com.ar/img/bariloche.jpg",
    baseUrl: "https://mejoresdestinos.com.ar",
  });

  return (
   <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{t("tips_greeting")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {travelTips.map(({ id, titleKey, descriptionKey, icon }) => (
          <div key={id} className="bg-white rounded shadow p-6 flex items-start space-x-4">
            <div className="text-3xl">{icon}</div>
            <div>
              <h2 className="text-xl font-semibold">{t(titleKey)}</h2>
              <p className="text-gray-600">{t(descriptionKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
