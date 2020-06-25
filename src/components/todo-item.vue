<template lang="html">
  <div v-if="todoList.length">
    <v-card>
      <v-list class="py-0">
        <div 
          v-for="(todo, index) in todoList" 
          :key="todo.id">
          <v-list-tile>
            <v-list-tile-action>
              <v-checkbox @change="toggleTodo(todo)" />
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title :class="{ completed: todo.complete }">{{
                todo.title
              }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn 
                color="error" 
                small 
                @click="deleteTodo(todo)">
                delete
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="index + 1 < todoList.length" />
        </div>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import Todo from "@/models/Todo";

export default {
  computed: {
    todoList() {
      return Todo.all();
    },
  },
  methods: {
    /**
     * Toggle complete
     * @param (todo)
     */

    toggleTodo(todo) {
      todo.$update({ complete: !todo.complete });
    },
    /**
     * Delete todo
     * @param (todo)
     */

    deleteTodo(todo) {
      todo.$delete();
    },
  },
};
</script>

<style lang="css" scoped>
::v-deep .v-input__slot{
  margin-bottom: 0;
}
.completed {
  color: #acacac;
  text-decoration: line-through;
}
</style>
