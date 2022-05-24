import type { RequestHandler } from '@sveltejs/kit'

// temp, replace with db
let todos: Todo[] = []

export const get: RequestHandler = async () => {
  return {
    status: 200,
    body: todos,
  }
}

export const post: RequestHandler = async ({ request }) => {
  const formData: FormData = await request.formData()
  todos.push({
    createdAt: new Date(),
    text: formData.get('text') as string,
    done: false,
  })
  return {
    status: 303,
    headers: {
      location: '/',
    },
  }
}