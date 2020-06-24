import { Todo } from "@/models/Todo";
export const getters = {
  todoList: "todoList",
};

export default {
  /**
   * Return all todo list
   * @return Array of list
   */
  [getters.todoList]: (state: Todo) => state.todoList,
};
