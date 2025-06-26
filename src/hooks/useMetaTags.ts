import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface MetaTagsProps {
  titleKey: string;
  descriptionKey: string;
  image?: string;
  baseUrl: string; // https://mejoresdestinos.com.ar
}

export const useMetaTags = ({ titleKey, descriptionKey, image, baseUrl }: MetaTagsProps) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Title
    document.title = t(titleKey);

    // Description
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", t(descriptionKey));

    // Canonical
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", `${baseUrl}${location.pathname}`);

    // Open Graph (opcional para redes)
    const ogTags = [
      { property: "og:title", content: t(titleKey) },
      { property: "og:description", content: t(descriptionKey) },
      { property: "og:url", content: `${baseUrl}${location.pathname}` },
      ...(image ? [{ property: "og:image", content: image }] : [])
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

  }, [location.pathname, i18n.language]);
};
