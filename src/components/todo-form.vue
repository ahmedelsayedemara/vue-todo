<template lang="html">
  <v-text-field
    v-model="todoList"
    @keyup.enter="handleSubmit(todoList)"
    label="Todo"
    placeholder="What do you have to do?"
    solo
  />
</template>

<script>
import { mapActions } from "vuex";
import { actionTypes } from "@/store/actions";
export default {
  data() {
    return {
      todoList: null
    };
  },
  methods: {
    ...mapActions([actionTypes.addList]),
    handleSubmit(todoList) {
      const list = todoList.trim()
      if(!list) {
        return false
      }
      this.addList(list);
      this.todoList =""
    },
  },
};
</script>

<style lang="css"></style>
