<template lang="html">
  <v-text-field
    v-model="todoList"
    @keyup.enter="handleSubmit(todoList)"
    label="Todo"
    placeholder="What do you have to do?"
    solo
  />
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import { actionTypes } from "@/store/actions";
import { Todo } from '../models/Todo';
export default Vue.extend({
  data() {
    return {
      todoList: "" as string,
    };
  },
  methods: {
    ...mapActions([actionTypes.addList]),
    handleSubmit(todoList: string) {
      const list = todoList.trim();
      if (!list) {
        return false;
      }
      this.addList(list);
      this.todoList = "";
    },
  },
});
</script>

<style lang="css"></style>
