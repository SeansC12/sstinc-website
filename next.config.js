/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.pixabay.com",
      "media.istockphoto.com",
      "image.shutterstock.com",
      "images.unsplash.com",
      "thumbs.dreamstime.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
