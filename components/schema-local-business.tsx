import Script from "next/script";

const SchemaLocalBusiness = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "SOS Électricien Aix-en-Provence",
    "image": "https://electricienaixenprovence-sos.fr/images/electricien-aixenprovence-expert.webp",
    "url": "https://electricienaixenprovence-sos.fr",
    "telephone": "+33756935200",
    "priceRange": "€€",
    "description": "Électricien certifié à Aix-en-Provence pour dépannages, installations électriques, mises aux normes et rénovations. Intervention rapide et garantie 7j/7.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Rue Masséna",
      "addressLocality": "Aix-en-Provence",
      "addressRegion": "Provence-Alpes-Côte d’Azur",
      "postalCode": "13100",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.526302,
      "longitude": 5.445429
    },
    "areaServed": {
      "@type": "Place",
      "name": "Aix-en-Provence et ses environs"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.95",
      "reviewCount": "320"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Marie Lemoine"
        },
        "reviewBody": "Excellent service, électricien très professionnel à Aix-en-Provence. Je recommande vivement !"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sofiane B."
        },
        "reviewBody": "Rapide, ponctuel et efficace. Intervention nickel dans mon appartement à Aix-en-Provence centre."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.9",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Isabelle G."
        },
        "reviewBody": "Un excellent travail, électricien de confiance et très réactif. Merci pour l’installation électrique !"
      }
    ]
  };

  return (
    <Script
      id="schema-local-business"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaLocalBusiness;