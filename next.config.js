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
            value:
              "accelerometer=(),ambient-light-sensor=(),attribution-reporting=(),autoplay=(),battery=(),camera=(),clipboard-read=(),clipboard-write=(),conversion-measurement=(),cross-origin-isolated=(),direct-sockets=(),display-capture=(),document-domain=(),encrypted-media=(),execution-while-not-rendered=(),execution-while-out-of-viewport=(),focus-without-user-activation=(),fullscreen=(),gamepad=(),geolocation=(),gyroscope=(),hid=(),idle-detection=(),interest-cohort=(),magnetometer=(),microphone=(),midi=(),navigation-override=(),otp-credentials=(),payment=(),picture-in-picture=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),shared-autofill=(),speaker-selection=(),storage-access-api=(),sync-script=(),sync-xhr=(),trust-token-redemption=(),usb=(),vertical-scroll=(),wake-lock=(),web-share=(),window-placement=(),xr-spatial-tracking=()",
          },
        ],
      },
    ];
  },
};
