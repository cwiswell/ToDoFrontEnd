import ToDoList from "../toDoComponent/todo-list.class";

export default interface IToDoCard{
    cardTitle: string;
    toDoList: ToDoList | null;
    checkEnable: boolean | null;
}
