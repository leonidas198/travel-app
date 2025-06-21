import { useTranslation } from "react-i18next"
import { NavLink, useParams } from "react-router-dom";
import { LanguageSwicher } from "./LanguageSwicher";


export const Header = () => {

    const { t } = useTranslation();
    const { lang = 'es' } = useParams();

  return (
    <header className="flex justify-between items-center p-4  shadow-md font-serif bg-blue-600">
      <h1 className="text-xl font-bold">✈️ TravelNow</h1>
      <nav className="flex items-center gap-4">
        <NavLink to={`/${lang}/blog`}>{t("blog.menu")}</NavLink>

        <NavLink to={`/${lang}`} className="hover:underline">{t('home')}</NavLink>
        <NavLink to={`/${lang}/destinations`} className="hover:underline">{t('destinations')}</NavLink>
        <NavLink to={`/${lang}/tips`} className="hover:underline">{t('tips_greet')}</NavLink>
        <NavLink to={`/${lang}/contact`} className="hover:underline">{t('contact_greeting')}</NavLink>
        <LanguageSwicher />
      </nav>
    </header>
  )
}
