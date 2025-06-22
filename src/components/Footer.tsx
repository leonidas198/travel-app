import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router-dom";


export const Footer = () => {

    const { t } = useTranslation();
    const { lang = "es" } = useParams();

  return (
    <footer className="bg-blue-600 text-gray-300 py-6 px-4 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
      <p className="mb-4 sm:mb-0 text-sm">
        &copy; {new Date().getFullYear()} {t('footer.copyright')}        
      </p>
      <p className="mb-4 sm:mb-0 text-sm">
        {t('footer.publicity')}
        <a href="https://my-portfolio-jrop.vercel.app/" target="_blank" rel="noopener noreferrer">
          Nuestra web
        </a>
      </p>

      <nav className="space-x-4 text-sm">
        <Link
          to={`/${lang}/politica-privacidad`}
          className="hover:underline" 
          title="Consulta nuestra Política de Privacidad para saber cómo manejamos tus datos."
        >
          {t('footer.privacy')}
        </Link>

        <Link
          to={`/${lang}/terminos-condiciones`}
          className="hover:underline"
          title="Lee nuestros Términos y Condiciones para entender el uso del sitio."
        >
          {t('footer.terms')}
        </Link>
      </nav>
    </footer>
  )
}
