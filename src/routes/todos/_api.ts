// temp, replace with db
let todos: Todo[] = []

export const api = (request: Request, todo?: Todo, params?: Record<string, string>) => {
  let body = {}
  let status = 500

  switch (request.method.toUpperCase()) {
    case 'GET':
      body = todos
      status = 200
      break;
    case 'POST':
      todos.push(todo as Todo)
      body = todo as Todo
      status = 201
    case 'DELETE':
      todos = params ? todos.filter(({ uid }) => uid !== params.uid ) : todos
      break
    default:
      break;
  }

  if (request.method.toUpperCase() !== 'GET') {
    return {
      status: 303,
      headers: {
        location: '/',
      },
    }
  }

  return {
    status,
    body,
  }
}