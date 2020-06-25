<template lang="html">
  <div>
    <div v-if="todoList.length">
      <v-card 
        v-for="todo in todoList" 
        :key="todo.id" 
        class="mb-3">
        <v-card-title primary-title>
          <div>
            <h3 
              class="headline mb-0" 
              :class="{ completed: todo.complete }">
              {{ todo.title }}
            </h3>
          </div>
        </v-card-title>
        <v-btn @click="toggleTodo(todo)">
          <span v-if="todo.complete">
            Uncompleted
          </span>
          <span v-else>
            Complete
          </span>
        </v-btn>
        <v-btn 
          color="error" 
          @click="deleteTodo(todo)">
          Delete
        </v-btn>
      </v-card>
    </div>
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

<style lang="css">
.completed {
    color: #acacac;
    text-decoration: line-through;
}
</style>
