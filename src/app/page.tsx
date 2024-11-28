import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const DynamicProductItems = dynamic(
  () => import('@/components/product-items'),
  {
    loading: () => (
      <div
        className={
          'grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-5'
        }
      >
        {Array(6)
          .fill(undefined)
          .map((_, index: number) => (
            <div key={index}>
              <Skeleton className='mb-2 h-[100px] w-full' />
              <Skeleton className='h-4 w-[50%]' />
            </div>
          ))}
      </div>
    )
  }
)

export default function Home() {
  return (
    <div className='content-container container'>
      <div className='mx-auto flex max-w-screen-md flex-col items-center gap-4 text-center'>
        <h1 className='font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-3xl'>
          Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>.
          Vestibulum aliquet, velit sit amet congue vulputate
        </h1>

        <p className='max-w-[42rem]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          aliquet, velit sit amet congue vulputate, nisl nisl pulvinar purus,
          sed commodo diam elit a mauris. Sed aliquam ac dui eget consequat.
          Aliquam consequat, ipsum non interdum cursus, est dui mattis urna, eu
          interdum risus lacus id sem. Phasellus sit amet lacus id massa
          tincidunt commodo sit amet vitae justo. Phasellus hendrerit semper
          urna, sit amet porta libero mollis a. Vestibulum vel ante neque. Cras
          tristique, dui vitae lobortis egestas, tortor elit rhoncus justo, sit
          amet vulputate justo metus eu leo. Nullam mi nibh, facilisis quis elit
          vitae, sagittis laoreet nunc. Integer consequat dignissim est quis
          feugiat. Aliquam hendrerit, diam sit amet interdum fringilla, leo nisl
          volutpat orci, vel rhoncus est ipsum at nisl.
          <Link className='underline' href='/contact'>
            Contact us
          </Link>
        </p>
      </div>

      <div className='flex flex-col items-center'>
        <div className='mb-12 mt-[100px] text-2xl font-bold'>
          Popular Products
        </div>
        <DynamicProductItems limit={6} />
        <Link
          href='/products'
          className={cn('mt-8', buttonVariants({ variant: 'ghost' }))}
        >
          See all products
          <Icons.moveRight className='ml-2 h-4 w-4' />
        </Link>
      </div>
    </div>
  )
}
