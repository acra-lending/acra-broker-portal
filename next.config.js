/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MENU_API_URL: 'https://068c-107-194-134-60.ngrok.io/api/broker-portal-menu-items',
    DASHBOARD_API_URL: 'https://068c-107-194-134-60.ngrok.io/api/broker-portal-dashboard-items'
  }
}

module.exports = nextConfig;
