// Get the base URL from environment variables
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

/**
 * Returns default SEO data
 * @returns {Object} - Default SEO metadata
 */
const DefaultSeo = {
  title: "Akdulum Kum Ocağı Hazır Beton - Adıyaman'ın Güvenilir Kum Tesisi",
  description:
    "Adıyaman'da bulunan Akdulum Kum Ocağı, kaliteli kum ve inşaat malzemeleri ile güvenilir çözümler sunar. Uygun fiyatlarla hizmet almak için bizimle iletişime geçin!",
  openGraphImage: `${BASE_URL}/images/og-image.png`,
  twitterCard: `${BASE_URL}/images/og-image.png`,
  twitterImage: `${BASE_URL}/images/og-image.png`,
  keywords:
    "Adıyaman kum ocağı, kum tedarikçisi, kaliteli kum, inşaat malzemeleri, kum temini, peyzaj kumları, uygun fiyatlı kum, Adıyaman inşaat malzemeleri, kum Tesisi, kum ocakları", // Default keywords
  favicon: `${BASE_URL}/images/favicon.png`,
};

/**
 * Fetch SEO data for a specific page from Firebase
 * @param {string} pageName - The name of the page for which to fetch the SEO data (e.g., 'homepage', 'product-page', etc.)
 * @returns {Promise<Object>} - Returns an object containing SEO metadata for the specified page
 */
export async function fetchSeoData() {
  return DefaultSeo;
}

/**
 * Generates SEO metadata in the format required by Next.js's generateMetadata function
 * @param {string} pageName - The name of the page for which to generate SEO metadata
 * @returns {Promise<Object>} - Returns SEO metadata formatted for Next.js
 */
export async function generateSeoMetadata(pageName) {
  return {
    title: DefaultSeo.title,
    description: DefaultSeo.description,
    openGraph: {
      title: DefaultSeo.title,
      description: DefaultSeo.description,
      url: BASE_URL,
      images: [
        {
          url: DefaultSeo.openGraphImage,
          width: 800,
          height: 600,
          alt: DefaultSeo.title,
        },
      ],
    },
    twitter: {
      card: DefaultSeo.twitterCard,
      title: DefaultSeo.title,
      description: DefaultSeo.description,
      image: DefaultSeo.twitterImage,
    },
    keywords: DefaultSeo.keywords,
    favicon: {
      url: DefaultSeo.favicon,
    },
  };
}
