import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { TravelTips } from "./pages/TravelTips";
import { NotFound } from "./pages/NotFound";
import { Contact } from "./pages/Contact";
import { RootLayout } from "./components/RootLAyout";
import { Destinations } from "./pages/Destinations";
  // <-- Importa este nuevo
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { PoliticaPrivacidad } from "./pages/PoliticaPrivacidad";
import { TerminosCondiciones } from "./pages/TerminosCondiciones";
import { DestinationDetail } from "./pages/DestinationDetail";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/es' replace/>
  },
  {
    path: '/:lang',
    element: <RootLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'destinos', element: <Destinations /> },
      { path: 'destinos/:slug', element: <DestinationDetail /> },  // ruta dinámica destino
      { path: 'tips', element: <TravelTips /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogPost /> },
      { path: 'politica-privacidad', element: <PoliticaPrivacidad /> },
      { path: 'terminos-condiciones', element: <TerminosCondiciones /> },
      { path: '*', element: <NotFound /> }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
