import { Response, Request } from "express";

// TODO: Define 'Item' interface with:
// property id of type number
// property description of type string
// property completed of type boolean
interface TodoItem {
  id: number;
  completed: boolean;
}

// Use this array to store your todo list
let todoList: TodoItem[] = [
  {
    id: 1,
    completed: false,
  },
  {
    id: 1,
    completed: false,
  },
  { id: 2, completed: true },
];

const getTodoRoute = (req: Request, res: Response) => {
  // TODO: complete this function!
  console.log(todoList.findIndex((x) => x.id === 1));

  res.send("FIXME: complete getTodoRoute()!");
};

export { getTodoRoute };
