import React from "react";

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  robots?: string;
  twitterCard?: string;
}

const Seo: React.FC<SEOProps> = ({
  title,
  description,
  name = "Inkaer",
  type = "website",
  robots,
  twitterCard = "summary",
}) => {
  return (
    <>
      {/* Title */}
      <title>{title}</title>

      {/* Basic meta */}
      <meta name="description" content={description} />
      {robots && <meta name="robots" content={robots} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:creator" content={name} />
    </>
  );
};

export default Seo;
