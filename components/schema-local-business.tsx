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
      "geoRadius": "20000"
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    }],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.95",
      "reviewCount": "320"
    }
  };

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </Head>
  );
};

export default SchemaLocalBusiness;
