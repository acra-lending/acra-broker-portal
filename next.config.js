/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MENU_API_URL: 'https://1532-70-183-23-147.ngrok.io/api/broker-portal-menu-items',
    DASHBOARD_API_URL: 'https://1532-70-183-23-147.ngrok.io/api/broker-portal-dashboard-items'
  }
}

module.exports = nextConfig;
