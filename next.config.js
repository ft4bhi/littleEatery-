/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  
   webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  
  images:{
    unoptimized:true,
  }
};

module.exports = nextConfig;

