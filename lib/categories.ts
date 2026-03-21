'use cache'

import { Category } from '@/types'
import { fetchVercelApi } from './fetchVercelApi'
import { cacheLife } from 'next/cache'

export const fetchCategories = async (): Promise<Category[]> => {
  cacheLife('max')

  const response = await fetchVercelApi('/categories')
  const { data } = await response.json()
  return data
}
