module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   // Required:
  //   appDir: true,
  // },
  images: {
    domains: ['res.cloudinary.com', 'picsum.photos'],
  },
  transpilePackages: ['ui', 'icons-web'],
};
