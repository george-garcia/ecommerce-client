/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
};

// module.exports = {
//   images: {
//     formats: ["image/avif", "image/webp"],
//     remotePatterns: [
//       {
//         protocol: "http",
//         domains: "localhost",
//         port: "",
//         pathname: "/image/upload/**",
//       },
//     ],
//   },
// };

// module.exports = {
//   images: {
//     domains: ["http://localhost:1337"],
//   },
// };

module.exports = nextConfig;
