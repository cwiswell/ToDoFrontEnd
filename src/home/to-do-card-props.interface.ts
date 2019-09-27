import ToDoList from "../interfaces/todo-list";

export default interface IToDoCard{
    cardTitle: string;
    toDoList: ToDoList | null;
    checkEnable: boolean | null;
}
