// app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/ui/Footer";
// import ClientSide from "@/components/ClientSide"; // Ensure you need this component, or remove if unnecessary
import { generateSeoMetadata } from "@/lib/service/SeoService";

export default async function RootLayout({ children }) {
  const seo = await generateSeoMetadata();

  return (
    <html lang="tr">
      <head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seo.openGraph.title} />
        <meta property="og:description" content={seo.openGraph.description} />
        <meta property="og:image" content={seo.openGraph.images[0].url} />
        <meta property="og:url" content={seo.openGraph.url} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={seo.twitter.card} />
        <meta name="twitter:title" content={seo.twitter.title} />
        <meta name="twitter:description" content={seo.twitter.description} />
        <meta name="twitter:image" content={seo.twitter.image} />

        {/* Favicon */}
        <link rel="icon" href={seo.favicon.url} />
        <link rel="apple-touch-icon" href={seo.favicon.url} />
      </head>
      <body className="antialiased bg-primary-dark text-primary-light">
        {children}
        <Footer />
      </body>
    </html>
  );
}
