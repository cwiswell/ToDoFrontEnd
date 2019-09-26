import ToDoItem from "./todo.interface";

export default interface ToDoList{
    id: number;
    active: boolean;
    title: string;
    toDoItems: ToDoItem[];
}