'use client'

import { API } from '@/app/services/api'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from './ui/skeleton'

interface ProductItems {
  limit?: number
}

interface IProduct {
  id: string
  name: string
}
interface IProductImage {
  id: string[]
  image: string
}
interface IProductWithImage {
  id: string
  name: string
  img: string
}

export default function ProductItems({ limit = undefined }: ProductItems) {
  const { data: products, isPending } = useQuery({
    queryKey: ['product'],
    queryFn: () =>
      Promise.all([
        API.get('/product.json').then(res => res.data.data),
        API.get('/image.json').then(res => res.data.data)
      ]).then(products => {
        return products[0].map((product: IProduct) => ({
          ...product,
          img:
            products[1].find((images: IProductImage) =>
              images.id.includes(product.id)
            )?.image || ''
        }))
      })
  })

  return (
    <div
      className={
        'xl:grid-cols- grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4'
      }
    >
      {isPending ? (
        Array(6)
          .fill(undefined)
          .map((_, index: number) => (
            <div key={index}>
              <Skeleton className='mb-2 h-[100px] w-full' />
              <Skeleton className='h-4 w-[50%]' />
            </div>
          ))
      ) : products ? (
        products
          .slice(0, limit || undefined)
          .map((product: IProductWithImage) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className='bg-white dark:border-gray-700 dark:bg-gray-900'
            >
              <Image
                width={300}
                height={100}
                className='min-h-[100px] w-full rounded-lg border border-gray-200 shadow dark:border-gray-700'
                src={product.img || '/images/unavailable-image.jpg'}
                alt='product image'
              />
              <h5 className='px1 mt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {product.name}
              </h5>
            </Link>
          ))
      ) : (
        <div className='container'>
          <p>{`No Product Yet :'(`}</p>
        </div>
      )}
    </div>
  )
}
