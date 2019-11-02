import ToDoItem from "./todo";

export default interface ToDoList{
    id: number;
    active: boolean;
    title: string;
    toDoItems: ToDoItem[];
    dateCreated: Date;
    lastUpdated: Date;
}