import ToDoItem from "./todo.interface";

export default interface ToDoList{
    active: boolean;
    title: string;
    toDoItems: ToDoItem[];
}