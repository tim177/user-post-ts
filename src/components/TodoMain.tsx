import { selector, useRecoilValue } from "recoil";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoItem } from "./TodoItem";
import { todoListAtom, todoListFilterState } from "../recoil/atoms/todoAtom";
import TodoListFilters from "./TodoListFilters";

const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListAtom);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const TodoMain: React.FC = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div className="container mx-auto w-max">
      <TodoItemCreator />
      <TodoListFilters />
      <div className=" mt-7 px-4 border-2 p-2">
        {todoList.length > 0 ? (
          <div>
            {todoList.map((todoItem) => (
              <TodoItem key={todoItem.id} item={todoItem} />
            ))}
          </div>
        ) : (
          <p className="text-teal-600">Enter some task</p>
        )}
      </div>
    </div>
  );
};
