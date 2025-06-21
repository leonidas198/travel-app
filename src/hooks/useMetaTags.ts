import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { setMetaTags } from "../utils/setMetaTags";

interface UseMetaTagsProps {
  titleKey: string;
  descriptionKey: string;
  image?: string;
  baseUrl: string;
}

export function useMetaTags({
  titleKey,
  descriptionKey,
  image,
  baseUrl,
}: UseMetaTagsProps) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setMetaTags({
      title: t(titleKey),
      description: t(descriptionKey),
      image: image || "https://tusitio.com/img/portada.jpg",
      url: `${baseUrl}/${i18n.language}`,
    });
  }, [i18n.language, t, titleKey, descriptionKey, image, baseUrl]);
}
