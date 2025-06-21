export function setMetaTags({
  title,
  description,
  image,
  url
}: {
  title: string;
  description: string;
  image: string;
  url: string;
}) {
  document.title = title;

  const setMeta = (nameOrProperty: string, content: string, isProperty = false) => {
    const attr = isProperty ? "property" : "name";
    let element = document.querySelector(`meta[${attr}="${nameOrProperty}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attr, nameOrProperty);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  // Básico
  setMeta("description", description);

  // Open Graph
  setMeta("og:title", title, true);
  setMeta("og:description", description, true);
  setMeta("og:image", image, true);
  setMeta("og:url", url, true);
  setMeta("og:type", "website", true);

  // Twitter
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  setMeta("twitter:image", image);
}
