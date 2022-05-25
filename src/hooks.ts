import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.searchParams.has('_method')) {
    // already specified in svelte.config.js
  }
  const response = await resolve(event)
  return response
}