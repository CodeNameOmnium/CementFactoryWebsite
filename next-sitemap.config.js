/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://akdulumkumocagi.com", // Projenin ana URL'si
  generateRobotsTxt: true, // Robots.txt oluşturulsun
  sitemapSize: 7000,
  exclude: ["/admin/*"], // Belirli sayfaları dışlamak istersen
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Tüm sayfalar için izin
      { userAgent: "*", disallow: "/admin" }, // Admin sayfalarını engelle
    ],
  },
};
