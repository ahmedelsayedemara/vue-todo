import { mutations } from "./mutations";

export const actionTypes = {
  addList: "addList",
  deleteList: "deleteList",
  completeList: "completeList",
};

export default {
  addList({ commit }, payload) {
    commit(mutations.ADD_LIST, payload);
  },
  deleteList({ commit }, payload) {
    commit(mutations.DELETE_LIST, payload);
  },
  completeList({ commit }, payload) {
    commit(mutations.COMPLETE_LIST, payload);
  },
};
