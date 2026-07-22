export function updateSEO(title: string, description: string = "") {
  const fullTitle = `${title} | Yebnas Studio`;
  document.title = fullTitle;
  
  const setMeta = (name: string, content: string, isProperty = false) => {
    const attr = isProperty ? 'property' : 'name';
    let meta = document.querySelector(`meta[${attr}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attr, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  };

  setMeta("description", description);
  
  // Open Graph
  setMeta("og:title", fullTitle, true);
  setMeta("og:description", description, true);
  setMeta("og:type", "website", true);
  
  const siteUrl = window.location.origin;
  const canonicalUrl = `${siteUrl}${window.location.pathname}`;
  
  setMeta("og:url", canonicalUrl, true);
  setMeta("twitter:title", fullTitle);
  setMeta("twitter:description", description);
  setMeta("twitter:card", "summary_large_image");
  
  // Canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);
  
  // Structured Data (JSON-LD)
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": fullTitle,
    "description": description,
    "url": canonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Yebnas Studio"
    }
  };
  
  script.textContent = JSON.stringify(structuredData);
}
