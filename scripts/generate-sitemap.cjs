const fs = require("fs");
const path = require("path");
const destinations = require("../src/data/destinations-data.cjs").destinations;

const baseUrl = "https://mejoresdestinos.com.ar";
const locales = ["es", "en"];

let urls = [
  "/",               // home
  "/destinos",       // destinos general
  "/consejos",       // consejos
  "/contacto"       // contacto
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Generar URLs estáticas
locales.forEach((lang) => {
  urls.forEach((url) => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${baseUrl}/${lang}${url}</loc>\n`;
    sitemap += `    <changefreq>weekly</changefreq>\n`;
    sitemap += `    <priority>0.9</priority>\n`;
    sitemap += `  </url>\n`;
  });
});

// Agregar rutas dinámicas por destino
destinations.forEach(({ slug }) => {
  locales.forEach((lang) => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${baseUrl}/${lang}/destinos/${slug}</loc>\n`;
    sitemap += `    <changefreq>monthly</changefreq>\n`;
    sitemap += `    <priority>0.8</priority>\n`;
    sitemap += `  </url>\n`;
  });
});

sitemap += `</urlset>\n`;

// Guardar archivo
fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap);
console.log("✅ Sitemap generado correctamente.");
