import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import { Todo } from "@/models/Todo";
Vue.use(Vuex);

const state = {
  todoList: [] as Todo[],
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
