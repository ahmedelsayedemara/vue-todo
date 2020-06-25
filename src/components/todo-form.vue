<template lang="html">
  <v-text-field
    v-model="todoList"
    @keyup.enter="add(todoList)"
    label="Todo"
    placeholder="What do you have to do?"
    solo
  />
</template>

<script lang="ts">
import Vue from "vue";
import Todo from "@/models/Todo";
export default Vue.extend({
  data() {
    return {
      todoList: "" as string,
    };
  },
  methods: {
    add(title) {
      const data = { title: title.trim(), complete: false };
      if (!data.title) {
        return false;
      }
      Todo.insert({
        data,
      });
      this.todoList = "";
    },
  },
});
</script>

<style lang="css"></style>
