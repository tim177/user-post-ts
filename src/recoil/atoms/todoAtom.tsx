import { atom } from "recoil";

export interface ToDo {
  id: string;
  text: string;
  isComplete: boolean;
}

export const todoListAtom = atom<ToDo[]>({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom<
  "Show All" | "Show Completed" | "Show Uncompleted"
>({
  key: "TodoListFilter",
  default: "Show All",
});
