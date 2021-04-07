import { Item } from "./swagger-definitions";
import {
  deleteAllTodo,
  deleteTodo,
  getAllTodo,
  getTodo,
  postTodo,
  updateTodo,
} from "./todo.swagger";

export const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "APIs Document",
    description: "APIs for simple to-do list server.",
  },
  tags: [
    {
      name: "todo",
    },
  ],
  paths: {
    "/todo": {
      get: getAllTodo,
      post: postTodo,
      delete: deleteAllTodo,
    },
    "/todo/{id}": {
      get: getTodo,
      put: updateTodo,
      delete: deleteTodo,
    },
  },
  components: {
    schemas: {
      Item: Item,
    },
  },
};
