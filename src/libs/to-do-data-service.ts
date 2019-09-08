import ToDoList from "../toDoComponent/todo-list.class";


function GetActiveToDos(): Promise<ToDoList[] | null> {
    return new Promise<ToDoList[] | null>((resolve, reject) => {
        return null;
    });
}
function GetToDo(id: number): Promise<ToDoList | null> {
    return new Promise<ToDoList | null>((resolve, reject) => {
        return null;
    });
}
function GetRecentlyClosedToDo(): Promise<ToDoList | null>{
    return new Promise<ToDoList | null>((resolve, reject) => {
        return null;
    });
}
export default { GetActiveToDos, GetToDo,GetRecentlyClosedToDo }