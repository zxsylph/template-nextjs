/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  transpilePackages: ['jotai-devtools']
}

module.exports = nextConfig
