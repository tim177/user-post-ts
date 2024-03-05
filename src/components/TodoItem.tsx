import { useRecoilState } from "recoil";
import { todoListAtom } from "../recoil/atoms/todoAtom";
import { Trash2 } from "lucide-react";

interface TodoItemProps {
  item: {
    id: string;
    text: string;
    isComplete: boolean;
  };
}

export const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: event.target.value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div className="flex items-center gap-4 p-3 border border-gray-200 w-full rounded-lg shadow">
      <input
        className="text-gray-800 flex-1"
        type="text"
        value={item.text}
        onChange={editItemText}
      />
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button
        className="p-2 text-white bg-red-500 hover:bg-red-700 rounded-full"
        onClick={deleteItem}
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

const replaceItemAtIndex = (arr: any[], index: number, newValue: any) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: any[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
