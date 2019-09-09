import ToDoList from "../toDoComponent/todo-list.class";

export function GetActiveToDos(): Promise<ToDoList[] | null> {
    return new Promise<ToDoList[] | null>((resolve, reject) => {
        resolve(null);
    });
}
export function GetToDo(id: number): Promise<ToDoList | null> {
    return new Promise<ToDoList | null>((resolve, reject) => {
        resolve(null);
    });
}
export function GetRecentlyClosedToDo(): Promise<ToDoList | null> {
    return new Promise<ToDoList | null>((resolve, reject) => {
        resolve(null);
    });
}

export function GetMostRecentActiveToDo(): Promise<ToDoList | null> {
    return new Promise<ToDoList | null>((resolve, reject) => {
        resolve(null);
    });
}