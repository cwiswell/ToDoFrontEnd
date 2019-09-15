import ToDoList from "../toDoComponent/todo-list.interface";

export default interface IToDoCard{
    cardTitle: string;
    toDoList: ToDoList | null;
    checkEnable: boolean | null;
}
