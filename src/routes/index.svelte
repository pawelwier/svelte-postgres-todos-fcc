<script>
  import TodoItem from '$lib/todo-item.svelte'

  const title = 'Todos'
</script>

<style>
  .todos {
    width: 100%;
    max-width: 42rem;
    margin: 4rem auto 0 auto;
  }

  .new {
    margin-bottom: 0.6rem;
  }

  .new input {
    font-size: 1.2rem;
    width: 100%;
    padding: 0.5rem 1rem 0.2rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    box-sizing: border-box;
    border-radius: 8px;
    text-align: center;
  }

  .todos :global(input) {
    border: none;
  }

  .todos :global(input:focus-visible) {
    box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.2);
    border: 1px solid rgb(66, 35, 150);
    outline: none;
  }
</style>

<svelte:head>
  <title>
    {title}
  </title>
</svelte:head>

<div class="todos">
  <h1>{title}</h1>
  <form
    action="" 
    method=""
    class="new"
  >
    <input
      type="text" 
      name="new-todo" 
      aria-label="Add a todo" 
      placeholder="+ tap to add a todo"
    >
  </form>
  <TodoItem />
  <TodoItem />

</div>