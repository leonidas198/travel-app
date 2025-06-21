import { useTranslation } from "react-i18next";


export const TerminosCondiciones = () => {

  const { t } = useTranslation();

  return (
     <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t('Términos y Condiciones')}</h1>

      <p>
        {t('Bienvenido a Gestoría Digital AR. Al acceder y usar este sitio web, aceptas cumplir y respetar los siguientes términos y condiciones.')}
      </p>

      <h2 className="mt-6 text-2xl font-semibold">{t('Uso del sitio')}</h2>
      <p>
        {t('El contenido del sitio es solo para fines informativos. No garantizamos la exactitud, integridad o actualidad de la información.')}
      </p>

      <h2 className="mt-6 text-2xl font-semibold">{t('Propiedad intelectual')}</h2>
      <p>
        {t('Todos los contenidos, textos, imágenes, logos y materiales son propiedad de Gestoría Digital AR o de sus respectivos dueños. No se permite su reproducción sin autorización.')}
      </p>

      <h2 className="mt-6 text-2xl font-semibold">{t('Responsabilidad')}</h2>
      <p>
        {t('No nos hacemos responsables por daños directos o indirectos que puedan surgir del uso o imposibilidad de uso del sitio.')}
      </p>

      <h2 className="mt-6 text-2xl font-semibold">{t('Enlaces externos')}</h2>
      <p>
        {t('El sitio puede contener enlaces a sitios externos que no controlamos. No somos responsables por su contenido ni prácticas.')}
      </p>

      <h2 className="mt-6 text-2xl font-semibold">{t('Modificaciones')}</h2>
      <p>
        {t('Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento sin previo aviso. Te recomendamos revisar esta página periódicamente.')}
      </p>

      <p className="mt-6 text-sm text-gray-500">
        {t('Última actualización: 19 de junio de 2025.')}
      </p>
    </main>
  )
}
