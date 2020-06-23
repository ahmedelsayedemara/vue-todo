export const getters = {
todoList:"todoList"
}

export default  {
  [getters.todoList]:state => state.todoList
}