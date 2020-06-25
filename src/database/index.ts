import { Database } from "@vuex-orm/core";
import Todo from "@/models/Todo";

const database = new Database();
database.register(Todo);
export default database;
