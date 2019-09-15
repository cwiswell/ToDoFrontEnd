import ToDoItem from "./todo.class";

export default interface ToDoList{
    title: string;
    toDoItems: ToDoItem[];
}