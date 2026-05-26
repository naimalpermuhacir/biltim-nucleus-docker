import { baseConfig } from '@monorepo/configs/next/base'
import type { NextConfig } from 'next'

const serverActionAllowedOrigins = [
  'localhost',
  '*.*.*.*',
]

const nextConfig: NextConfig = {
  ...baseConfig,
  allowedDevOrigins: ['*'],
  experimental: {
    ...baseConfig.experimental,
    serverActions: {
      ...baseConfig.experimental?.serverActions,
      allowedOrigins: serverActionAllowedOrigins,
    },
  },
}

export default nextConfig
