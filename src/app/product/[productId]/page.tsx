'use client'

import { API } from '@/app/services/api'
import {
  IProduct,
  IProductImage,
  IProductWithImage
} from '@/components/product-items'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

interface IProductDetail {
  params: { productId: string }
}

export default function ProductDetail({ params }: IProductDetail) {
  const { productId } = params

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

  const selectedProduct: IProductWithImage = products
    ? products.find((item: IProductWithImage) => item.id === String(productId))
    : null

  return (
    <div className='content-container container'>
      {!selectedProduct || isPending ? null : (
        <div className='flex flex-col md:flex-row'>
          <div className='mr-4 w-full cursor-zoom-in rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-900 md:w-[25vw]'>
            <Gallery>
              <Item
                original={selectedProduct.img}
                thumbnail={selectedProduct.img}
                width='1024'
                height='768'
              >
                {({ ref, open }) => (
                  <Image
                    ref={ref}
                    onClick={open}
                    src={selectedProduct.img || '/images/unavailable-image.jpg'}
                    width={300}
                    height={100}
                    className='w-full object-contain'
                    alt='product image'
                    sizes='(max-width: 768px) 100vw, 33vw'
                  />
                )}
              </Item>
            </Gallery>
          </div>

          <div className='mt-4 w-full md:mt-0'>
            <h3 className='mt-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {selectedProduct.name}
            </h3>
            <hr className='my-4 w-full' />
            <div>
              {`
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.`}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
