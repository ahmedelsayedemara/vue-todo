import { Model } from "@vuex-orm/core";

export default class Todo extends Model {
  static entity = "todoList";

  static fields() {
    return {
      id:this.uid(),
      title: this.string(""),
      complete: this.boolean(false),
    };
  }
}
