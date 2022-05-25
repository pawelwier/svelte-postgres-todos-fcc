import type { RequestHandler } from '@sveltejs/kit'
import { api } from './_api'

export const get: RequestHandler = ({ request }) => {
  return api(request)
}

export const post: RequestHandler = async ({ request }) => {
  const formData: FormData = await request.formData()
  const todo = {
    uid: `${Date.now()}`,
    createdAt: new Date(),
    text: formData.get('text') as string,
    done: false,
  }
  return api(request, todo)
}