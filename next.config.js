/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  i18n,
};

module.exports = {
  ...nextConfig,
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Permissions-Policy",
            value: "ambient-light-sensor=(),idle-detection=()",
          },
        ],
      },
    ];
  },
};
