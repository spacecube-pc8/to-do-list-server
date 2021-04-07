import { Item, NewItem } from "./swagger-definitions";

const getAllTodo = {
  tags: ["todo"],
  summary: "Get all todo items.",
  description: "Get all todo items.",
  responses: {
    "200": {
      description: "A list of all todo items.",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: Item,
          },
        },
      },
    },
  },
};

const postTodo = {
  tags: ["todo"],
  summary: "Creates new todo item.",
  description: "Creates new todo item.",
  consumes: ["application/json"],
  produces: ["application/json"],
  parameters: [
    {
      name: "description",
      in: "body",
      description: "Description of todo item.",
      required: true,
      type: "string",
      schema: NewItem,
    },
  ],
  responses: {
    "200": {
      description: "Created todo item.",
      content: {
        "application/json": {
          schema: Item,
        },
      },
    },
  },
};

const deleteAllTodo = {
  tags: ["todo"],
  summary: "Delete all todo items.",
  description: "Delete all todo items.",
  responses: {
    "200": {
      description: "A list of deleted all todo items.",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: Item,
          },
        },
      },
    },
  },
};

const getTodo = {
  tags: ["todo"],
  summary: "Get single todo item by ID",
  description: "Get single todo item by ID.",
  produces: ["application/json"],
  parameters: [
    {
      name: "id",
      in: "path",
      description: "ID of todo item.",
      required: true,
      schema: {
        type: "integer",
        format: "int32",
      },
    },
  ],
  responses: {
    "200": {
      description: "Get todo item by ID.",
      content: {
        "application/json": {
          schema: Item,
        },
      },
    },
  },
};

const updateTodo = {
  tags: ["todo"],
  summary: "Update todo item by ID",
  description: "Update todo item by ID.",
  consumes: ["application/json"],
  produces: ["application/json"],
  requestBody: {
    description: "New todo item.",
    required: true,
    content: {
      "application/json": {
        schema: Item,
      },
    },
  },
  parameters: [
    {
      name: "id",
      in: "path",
      description: "ID of todo item to update.",
      required: true,
      schema: {
        type: "integer",
        format: "int32",
      },
    },
  ],
  responses: {
    "200": {
      description: "Updated todo item.",
      content: {
        "application/json": {
          schema: Item,
        },
      },
    },
  },
};

const deleteTodo = {
  tags: ["todo"],
  summary: "Delete todo item by ID",
  description: "Delete todo item by ID.",
  produces: ["application/json"],
  parameters: [
    {
      name: "id",
      in: "path",
      description: "ID of todo item.",
      required: true,
      schema: {
        type: "integer",
        format: "int32",
      },
    },
  ],
  responses: {
    "200": {
      description: "Deleted todo item.",
      content: {
        "application/json": {
          schema: Item,
        },
      },
    },
  },
};

export { getAllTodo, postTodo, deleteAllTodo, getTodo, updateTodo, deleteTodo };
