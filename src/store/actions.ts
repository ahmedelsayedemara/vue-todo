import { mutations } from "./mutations";
import { Todo } from "@/models/Todo";

export const actionTypes = {
  addList: "addList",
  deleteList: "deleteList",
  completeList: "completeList",
};

export default {
  /**
   * To create new lsit
   * @param {list}
   */
  addList({ commit }: any, payload: Todo): Todo {
    return commit(mutations.ADD_LIST, payload);
  },
  /**
   * To delete lsit f
   * @param {list}
   */
  deleteList({ commit }: any, payload: Todo): Todo {
    return commit(mutations.DELETE_LIST, payload);
  },
  /**
   * To complete lsit
   * @param {list}
   */
  completeList({ commit }: any, payload: Todo): Todo {
    return commit(mutations.COMPLETE_LIST, payload);
  },
};
