import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import i18n from "../i18n";
import { Header } from "./Header";
import { Footer } from "./Footer";




export const RootLayout = () => {
    const { lang } = useParams();

    useEffect(() => {
        if (lang === 'es' || lang === 'en') {
            i18n.changeLanguage(lang);
        }
    }, [lang]);

    return (
        <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-grow p-4">
            <Outlet/>
        </main>
        <Footer/>
        </div>
    )
}