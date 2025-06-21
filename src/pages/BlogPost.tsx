import { useParams } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { blogPosts } from "../data/blogPost";

export const BlogPost = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = t(post.titleKey);
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", t(post.summaryKey));
      } else {
        const metaTag = document.createElement("meta");
        metaTag.name = "description";
        metaTag.content = t(post.summaryKey);
        document.head.appendChild(metaTag);
      }
    }
  }, [i18n.language, post, t]);

  if (!post) {
    return <p className="text-center text-gray-600 mt-10">{t("blog.notFound")}</p>;
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <img src={post.image} alt={t(post.titleKey)} className="w-full h-64 object-cover rounded mb-6" />
      <h1 className="text-4xl font-bold mb-4">{t(post.titleKey)}</h1>
      <p className="text-lg text-gray-700">{t(post.summaryKey)}</p>

      <div className="mt-6 text-gray-800 leading-relaxed">
        {t(post.slug)}
      </div>
    </article>
  );
};
