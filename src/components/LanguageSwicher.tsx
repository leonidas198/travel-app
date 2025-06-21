import { useTranslation } from "react-i18next"



export const LanguageSwicher = () => {

    const { i18n } = useTranslation();

    const handleChange = (lang: string) => {
        i18n.changeLanguage(lang);
    };

  return (
    <div className="flex gap-2">
        <button onClick={() => handleChange('es')} className="px-2 bg-amber-200 rounded-2xl">ES</button>
        <button onClick={() => handleChange('en')} className="px-2 bg-amber-200 rounded-2xl" >EN</button>
    </div>
  )
}
