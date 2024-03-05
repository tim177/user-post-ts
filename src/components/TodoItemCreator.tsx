import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../recoil/atoms/todoAtom";
import { generateUID } from "../utils/uuid";

export const TodoItemCreator: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addTodoItem = () => {
    if (inputValue) {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: generateUID(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="flex space-x-4 h-8 m-auto">
      <div className="flex rounded-md overflow-hidden ">
        <input
          type="text"
          className="border-2 border-black px-4 py-3 leading-9 rounded-md rounded-r-none"
          value={inputValue}
          onChange={onChange}
        />
        <button
          className="bg-indigo-600 text-white px-2 text-lg font-semibold"
          onClick={addTodoItem}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};
