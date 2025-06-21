import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";

import { TravelTips } from "./pages/TravelTips";
import { NotFound } from "./pages/NotFound";

import { Contact } from "./pages/Contact";
import { RootLayout } from "./components/RootLAyout";
import { Destinations } from "./pages/Destinations";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { PoliticaPrivacidad } from "./pages/PoliticaPrivacidad";
import { TerminosCondiciones } from "./pages/TerminosCondiciones";





export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/es' replace/>
    },
    {
        path: '/:lang',
        element: <RootLayout/>,
        children: [
            { path: '', element: <Home/> },
            { path: 'contact', element: <Contact/> },
            { path: 'destinations', element: <Destinations/> },
            { path: 'tips', element: <TravelTips/> },
            { path: 'blog', element: <Blog/> },
            { path: 'blog/:slug', element: <BlogPost/> },
            { path: '*', element: <NotFound/> },
            { path: 'politica-privacidad', element: <PoliticaPrivacidad/> },
            { path: 'terminos-condiciones', element: <TerminosCondiciones/> }

        ]
    }
]) 