<style>
  .todo {
    display: grid;
    grid-template-columns: 2rem 1fr 2rem;
    grid-gap: 0.5rem;
    align-items: center;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: #FFF;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));
    transform: translate(-1px, -1px);
    transition: filter 0.2s, transform 0.2s;
  }

  .todo button {
    width: 2rem;
    height: 2rem;
    border: none;
    background-color: transparent;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  .todo input {
    flex: 1;
    padding: 0.5rem 2rem 0.5rem 0.8rem;
    border-radius: 3px;
  }

  button.toggle {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    box-sizing: border-box;
    background-size: 1rem auto;
  }

  .text {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
  }

  .save {
    position: absolute;
    right: 0;
    opacity: 0;
  }

  .todo input:focus + .save,
  .save:focus {
    transition: opacity 0.2s;
    opacity: 1;
  }

  .delete {
    opacity: 0.3;
  }

  .delete:hover,
  .delete:focus {
    transition: 0.2s opacity;
    opacity: 1;
  }

  .done {
    transform: none;
    opacity: 0.5;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.2));
  }

  .done .toggle {
    background-color: red;
  }
</style>

<div class="todo">
  <form 
    action=""
    method=""
  >
    <input 
      type="hidden"
      name="done"
      value=""
    />
    <button
      class="toggle"
      aria-label="Mark done/not done"
    >
      Done
    </button>
  </form>
  <form 
    class="text"
    action=""
    method=""
  >
    <input 
      type="text"
      name="done"
      value=""
    />
    <button
      class="save"
      aria-label="Save changes"
    >
      Save
    </button>
  </form>
  <form 
    action=""
    method=""
  >
    <button
      class="delete"
      aria-label="Delete"
    >
      Delete
    </button>
  </form>
</div>