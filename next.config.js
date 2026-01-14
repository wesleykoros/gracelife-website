/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "gracelifeservices.com.au" }],
        destination: "https://gracelifecareservices.com.au/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.gracelifeservices.com.au" }],
        destination: "https://gracelifecareservices.com.au/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
