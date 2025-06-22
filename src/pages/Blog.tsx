
import { useTranslation } from "react-i18next";
import { blogPosts } from "../data/blogPost";
import { useMetaTags } from "../hooks/useMetaTags";


export const Blog = () => {
  const { t, i18n } = useTranslation();

  useMetaTags({
    titleKey: "seo.blogTitle",
    descriptionKey: "seo.blogDescription",
    image: "https://mejoresdestinos.com.ar/img/bariloche.jpg",
    baseUrl: "https://mejoresdestinos.com.ar",
  });

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{t("blog.title")}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map(({ id, titleKey, summaryKey, image, slug }) => (
          <a
            key={id}
            href={`/${i18n.language}/blog/${slug}`}
            className="block bg-white rounded shadow hover:shadow-lg transition overflow-hidden"
          >
            <img src={image} alt="" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{t(titleKey)}</h2>
              <p className="text-gray-600">{t(summaryKey)}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
