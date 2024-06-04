/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "scontent-ssn1-1.xx.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
