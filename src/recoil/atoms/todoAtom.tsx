import { atom } from "recoil";

interface ToDo {
  id: string;
  text: string;
  isComplete: boolean;
}

export const todoListAtom = atom({
  key: "todoListState",
  default: [] as ToDo[],
});
