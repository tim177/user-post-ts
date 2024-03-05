import { atom } from "recoil";

export const todoListAtom = atom({
  key: "todoListState",
  default: [] as { id: string; text: string; isComplete: boolean }[],
});
