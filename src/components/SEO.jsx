import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SEO() {
  const location = useLocation();

  useEffect(() => {
    const baseUrl = "https://coloradocolonics.com";
    const canonicalUrl = `${baseUrl}${location.pathname}`;

    let canonicalTag = document.querySelector('link[rel="canonical"]');

    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.setAttribute("href", canonicalUrl);
  }, [location.pathname]);

  return null;
}

export default SEO;