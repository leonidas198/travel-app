import { useTranslation } from "react-i18next";


export const PoliticaPrivacidad = () => {

  const { t } = useTranslation();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t('Política de Privacidad')}</h1>
      <p>
        {t('En Gestoría Digital AR valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política explica qué información recopilamos, cómo la usamos y las opciones que tienes respecto a tus datos.')}
      </p>

      <h2 className="mt-6 text-2xl font-semibold">{t('Información que recopilamos')}</h2>
      <p>
        {t('Podemos recopilar información que tú nos proporcionas al utilizar el sitio, como tu nombre, correo electrónico, y cualquier otro dato que decidas compartir mediante formularios o contacto.')}
      </p>

      <h2 className="mt-6 text-2xl font-semibold">{t('Uso de la información')}</h2>
      <p>
        {t('La información recopilada se usa para responder consultas, mejorar nuestros servicios y personalizar la experiencia del usuario. No vendemos ni compartimos tus datos con terceros sin tu consentimiento, salvo por obligación legal.')}
      </p>

      <h2 className="mt-6 text-2xl font-semibold">{t('Cookies')}</h2>
      <p>
        {t('Utilizamos cookies para mejorar la navegación, analizar el tráfico y mostrar publicidad personalizada. Puedes configurar tu navegador para rechazar cookies si lo deseas.')}
      </p>

      <h2 className="mt-6 text-2xl font-semibold">{t('Seguridad')}</h2>
      <p>
        {t('Implementamos medidas técnicas y organizativas para proteger tu información contra accesos no autorizados, alteraciones o destrucción.')}
      </p>

      <h2 className="mt-6 text-2xl font-semibold">{t('Tus derechos')}</h2>
      <p>
        {t('Puedes solicitar acceso, rectificación, cancelación o eliminación de tus datos en cualquier momento contactándonos a través del formulario disponible en el sitio.')}
      </p>

      <h2 className="mt-6 text-2xl font-semibold">{t('Cambios en la política')}</h2>
      <p>
        {t('Esta política puede actualizarse ocasionalmente. Publicaremos cualquier cambio en esta página con fecha de actualización.')}
      </p>

      <p className="mt-6 text-sm text-gray-500">
        {t('Última actualización: 19 de junio de 2025.')}
      </p>
    </main>
  )
}
