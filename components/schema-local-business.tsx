import Head from "next/head";

const SchemaLocalBusiness = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Electricien Toulon Expert",
    "image": "https://electricientoulon-expert.fr/images/electricien-Toulon-intervention.webp",
    "url": "https://electricientoulon-expert.fr",
    "telephone": "+33 6 00 00 00 00",
    "priceRange": "€€",
    "description": "Electricien certifié à Toulon pour dépannages, installations électriques, mises aux normes et rénovations. Intervention rapide et garantie 7j/7.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Rue Masséna",
      "addressLocality": "Toulon",
      "addressRegion": "Provence-Alpes-Côte d’Azur",
      "postalCode": "06000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7031,
      "longitude": 7.2661
    },
    "areaServed": {
      "@type": "Place",
      "name": "Toulon"
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
        "opens": "08:00",
        "closes": "20:00"
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
        "reviewBody": "Excellent service, électricien très professionnel à Toulon. Je recommande vivement !"
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
        "reviewBody": "Rapide, ponctuel et efficace. Intervention nickel dans mon appartement à Toulon centre."
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
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
};

export default SchemaLocalBusiness;
