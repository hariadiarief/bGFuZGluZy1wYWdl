'use client'

import { useTheme } from 'next-themes'

import NextTopLoader from 'nextjs-toploader'

export default function PageLoader() {
  const { resolvedTheme: theme } = useTheme()

  console.log({ theme })

  return (
    <NextTopLoader
      showSpinner={false}
      color='#f1f5f9'
    />
  )
}
