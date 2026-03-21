'use cache'

import type { Store } from '@/types'
import { fetchVercelApi } from './fetchVercelApi'
import { cacheLife } from 'next/cache'

export const fetchStore = async (): Promise<Store> => {
  cacheLife('max')
  const response = await fetchVercelApi('/store/config')
  const { data } = await response.json()
  return data as Store
}
