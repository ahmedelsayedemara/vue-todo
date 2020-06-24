<template lang="html">
  <div v-if="todoList.length">
    <v-card 
      v-for="(list, index) in todoList" 
      :key="index" 
      class="mb-3">
      <v-card-title primary-title>
        <div>
          <h3 
            class="headline mb-0" 
            :class="{ completed: list.complete }">
            {{ list.title }}
          </h3>
        </div>
      </v-card-title>
      <v-btn @click="completeList(list)">
        <span v-if="list.complete">
          Un Completed
        </span>
        <span v-else>
          Complete
        </span>
      </v-btn>
      <v-btn 
        color="error" 
        @click="deleteList(list)">
        Delete
      </v-btn>
    </v-card>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { getters } from "@/store/getters";
import { actionTypes } from "@/store/actions";

export default {
  computed: {
    ...mapGetters([getters.todoList]),
  },
  methods: {
    ...mapActions([actionTypes.deleteList, actionTypes.completeList]),
  },
};
</script>

<style lang="css">
.completed {
    color: #acacac;
    text-decoration: line-through;
}
</style>
