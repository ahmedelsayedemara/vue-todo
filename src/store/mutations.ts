import { Todo } from "@/models/Todo";
export const mutations = {
  ADD_LIST: "ADD_LIST",
  EDIT_LIST: "EDIT_LIST",
  DELETE_LIST: "DELETE_LIST",
  COMPLETE_LIST: "COMPLETE_LIST",
};

export default {
  [mutations.ADD_LIST]: (state: any, list: String) =>
    state.todoList.push({
      title: list,
      complete: false,
    }),

  [mutations.DELETE_LIST]: (state: any, list: Todo) =>
    state.todoList.splice(state.todoList.indexOf(list), 1),

  [mutations.COMPLETE_LIST]: (state: any, list: Todo) => {
    list.complete = !list.complete;
  },
};
