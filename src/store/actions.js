import { mutations } from "./mutations";

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
  addList({ commit }, payload) {
    commit(mutations.ADD_LIST, payload);
  },
  /**
   * To delete lsit f
   * @param {list}
   */
  deleteList({ commit }, payload) {
    commit(mutations.DELETE_LIST, payload);
  },
  /**
   * To complete lsit
   * @param {list}
   */
  completeList({ commit }, payload) {
    commit(mutations.COMPLETE_LIST, payload);
  },
};
