//** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/littleEatery",
  assetPrefix: "/littleEatery/", // Ensure this is correct
  output: "export"// Confirm this is supported in your Next.js version
};

module.exports = nextConfig; // Use CommonJS export

