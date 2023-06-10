import classNames from 'classnames';
import React from 'react';

interface Props {
  isThereActiveTodo: boolean,
  updateAllTodo: () => Promise<void>,
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  inputValue: string,
  updatetempTodo: (value: string) => void,
}

export const Header:React.FC<Props> = ({
  isThereActiveTodo,
  updateAllTodo,
  handleFormSubmit,
  inputValue,
  updatetempTodo,
}) => {
  return (
    <header className="todoapp__header">
      <label htmlFor="nameInput">
        <button
          id="nameInput"
          type="button"
          className={classNames('todoapp__toggle-all', {
            active: isThereActiveTodo,
          })}
          onClick={updateAllTodo}
        >
          {null}
        </button>
      </label>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(event) => {
            updatetempTodo(event.target.value);
          }}
        />
      </form>
    </header>
  );
};
