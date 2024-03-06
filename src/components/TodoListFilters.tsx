import { todoListAtom, todoListFilterState } from "@/recoil/atoms/todoAtom";
import React from "react";
import { selector, useRecoilState } from "recoil";

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const unselectedFilter = () => {
    setFilter("Show Uncompleted");
  };
  const selectedFilter = () => {
    setFilter("Show Completed");
  };
  const allFilter = () => {
    setFilter("Show all");
  };
  return (
    <div className="p-2 flex gap-4">
      {/* {filter} Task */}
      <button
        className="bg-red-500 text-white px-4 rounded text-lg font-semibold"
        onClick={unselectedFilter}
      >
        UnSelected
      </button>
      <button
        className="bg-green-500 text-white px-4 rounded text-lg font-semibold"
        onClick={selectedFilter}
      >
        Selected
      </button>
      <button
        className="bg-blue-500 text-white px-4 rounded text-lg font-semibold"
        onClick={allFilter}
      >
        All
      </button>
    </div>
  );
}

export default TodoListFilters;
