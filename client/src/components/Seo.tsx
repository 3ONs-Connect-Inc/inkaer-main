
import React from "react";
import { Title, Meta } from "react-head"; 

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
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      {robots && <Meta name="robots" content={robots} />}

      {/* Open Graph */}
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:type" content={type} />

      {/* Twitter */}
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <Meta name="twitter:card" content={twitterCard} />
      <Meta name="twitter:creator" content={name} />
    </>
  );
};

export default Seo;
