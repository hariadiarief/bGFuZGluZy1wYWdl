'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navigationsConfig } from '@/config/navigations'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className='mr-4 hidden md:flex'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        {/* <Icons.logo className='h-6 w-6' /> */}
        <span className='hidden font-bold sm:inline-block'>
          {siteConfig.name}
        </span>
      </Link>

      <nav className='flex items-center gap-4 text-sm lg:gap-6'>
        {navigationsConfig.mainNav?.map((navigation, index) => (
          <Link
            key={index}
            href={navigation.href}
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname?.startsWith('/blog')
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
          >
            {navigation.title}
          </Link>
        ))}
        {/* <Link
          href='/contact'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/contact')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Contact Me
        </Link> */}
      </nav>
    </div>
  )
}
