import { Category } from '@/types'
import { fetchVercelApi } from './fetchVercelApi'

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetchVercelApi('/categories', {
    next: { revalidate: false }, // cache indefinitely — categories don't change between deploys
  })
  const { data } = await response.json()
  return data
}
