
const DefaultSeo = () => {
  return (
    <>
      <title>Inkaer – Get Hired Based on Real Skills</title>

      {/* Basic meta */}
      <meta
        name="description"
        content="Inkaer connects companies with verified engineering talent. Hire faster, reduce risk, and build stronger teams with confidence." />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" 
     content="Inkaer – Hiring the Best Engineers, Made Simple" 
       />
      <meta
        property="og:description"
      content="Inkaer connects companies with verified engineering talent - helping you hire faster, build stronger teams, and stay ahead." 
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://inkaer.com/" />
      <meta property="og:image" content="https://inkaer.com/og-image.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Inkaer – Get Hired Based on Real Skills" />
      <meta
        name="twitter:description"
       content="Inkaer connects companies with verified engineering talent - helping you hire faster, build stronger teams, and stay ahead." 
      />
      <meta name="twitter:image" content="https://inkaer.com/twitter-image.png" />
      <meta name="twitter:creator" content="@inkaer" />
    </>
  );
};

export default DefaultSeo;
