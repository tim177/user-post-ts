import { useRecoilValue } from "recoil";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoItem } from "./TodoItem";
import { todoListAtom } from "../recoil/atoms/todoAtom";

export const TodoMain: React.FC = () => {
  const todoList = useRecoilValue(todoListAtom);

  return (
    <div className="container mx-auto w-max">
      <TodoItemCreator />
      <div className=" mt-7 px-4 border-2 p-2">
        {todoList.length > 0 && (
          <div>
            {todoList.map((todoItem) => (
              <TodoItem key={todoItem.id} item={todoItem} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
