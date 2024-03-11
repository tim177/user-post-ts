import { todoListFilterState } from "@/recoil/atoms/todoAtom";
import React from "react";
import { useRecoilState } from "recoil";

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  return (
    <div className="p-2 flex gap-4">
      {/* {filter} Task */}
      <button
        className="bg-red-500 text-white px-4 rounded text-lg font-semibold"
        onClick={() => setFilter("Show Uncompleted")}
      >
        UnSelected
      </button>
      <button
        className="bg-green-500 text-white px-4 rounded text-lg font-semibold"
        onClick={() => setFilter("Show Completed")}
      >
        Selected
      </button>
      <button
        className="bg-blue-500 text-white px-4 rounded text-lg font-semibold"
        onClick={() => setFilter("Show All")}
      >
        All
      </button>
    </div>
  );
}

export default TodoListFilters;
