// components/SchemaLocalBusiness.tsx
import Head from "next/head";

const SchemaLocalBusiness = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Électricien Nice 24h/24",
    "image": "https://electricien-nice.fr/images/electricien-nice-intervention.webp",
    "url": "https://electricien-nice.fr",
    "telephone": "+33 6 00 00 00 00",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Rue de la Liberté",
      "addressLocality": "Nice",
      "postalCode": "06000",
      "addressCountry": "FR"
    },
    "priceRange": "€€",
    "description": "Dépannage, installation et mise aux normes électriques à Nice. Électricien certifié disponible 7j/7 pour tous types d’interventions.",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 43.7031,
        "longitude": 7.2661
      },
      "geoRadius": 20000
    },
    "hasMap": "https://www.google.com/maps/place/43.7031,7.2661",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7031,
      "longitude": 7.2661
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
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Jean Dupont"
      },
      "datePublished": "2024-07-01",
      "reviewBody": "Intervention rapide et efficace, je recommande vivement cet électricien à Nice.",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "worstRating": "1",
        "ratingValue": "5"
      }
    },
    "sameAs": [
      "https://www.facebook.com/tonentreprise",
      "https://www.instagram.com/tonentreprise",
      "https://www.linkedin.com/company/tonentreprise"
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
