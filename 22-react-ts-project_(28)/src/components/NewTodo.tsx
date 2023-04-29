import { FC, FormEvent } from "react";

const NewTodo: FC = (props) => {
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
