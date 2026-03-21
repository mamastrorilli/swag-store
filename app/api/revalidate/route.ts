import { revalidateTag } from 'next/cache'

export async function POST(request: Request) {
  const headers = request.headers
  const revalidateRequestSecret = headers.get('x-revalidate-secret')
  const revalidateSecret = process.env.REVALIDATE_SECRET

  if (!revalidateSecret || revalidateRequestSecret !== revalidateSecret) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { tag } = await request.json()
  revalidateTag(tag, 'max')
  return new Response('OK', { status: 200 })
}
