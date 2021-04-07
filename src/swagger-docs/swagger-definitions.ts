const NewItem = {
  type: "object",
  properties: {
    description: { type: "string", example: "Buy cake" },
  },
};

const Item = {
  type: "object",
  properties: {
    id: { type: "integer", format: "int32", example: "1" },
    description: { type: "string", example: "Buy cake" },
    completed: { type: "boolean", example: false },
  },
};

export { NewItem, Item };
