/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['intellex-images.s3.eu-north-1.amazonaws.com'],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
  }
  
export default nextConfig
  