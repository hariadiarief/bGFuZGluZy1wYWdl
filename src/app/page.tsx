'use client'

import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { API } from './services/api'

export default function Home() {
  const { data } = useQuery({
    queryKey: ['product'],
    queryFn: () => API.get('/product.json').then(res => res)
  })

  console.log({ data })

  return (
    <div className='container mt-16'>
      <Button>Click me</Button>
    </div>
  )
}
