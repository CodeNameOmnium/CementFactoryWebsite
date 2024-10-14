/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow all domains for image optimization (development only)
    domains: process.env.NODE_ENV === "production" ? [] : ["*"], // Disallow in production

    // Optional: Consider using a trusted image optimization service for production
    // optimizer: {
    //   provider: public ? 'cloudinary' : 'vercel', // Choose based on your provider
    //   lazy: true,
    // },
  },
};

export default nextConfig;
