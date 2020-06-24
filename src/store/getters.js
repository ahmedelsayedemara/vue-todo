export const getters = {
  todoList: "todoList",
};

export default {
  /**
   * Return todo list
   * @return {[]}
   */
  [getters.todoList]: (state) => state.todoList,
};
