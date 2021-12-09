
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/styles')],
  },
  images: {
    domains: ['via.placeholder.com'],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
}
