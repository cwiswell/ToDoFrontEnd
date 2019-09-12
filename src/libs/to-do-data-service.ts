import ToDoList from "../toDoComponent/todo-list.class";
import ToDoItem from "../toDoComponent/todo.class";

const toDoData = [new ToDoItem("Some Item", false), new ToDoItem("Do Dishes", true), new ToDoItem("Yard Work", false), new ToDoItem("Make dinner", false)];
const toDoList = new ToDoList("Monday ToDo List", toDoData);
const prevToDoList = new ToDoList("Sunday To Do List", toDoData);

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
        resolve(prevToDoList);
    });
}

export function GetMostRecentActiveToDo(): Promise<ToDoList | null> {
    return new Promise<ToDoList | null>((resolve, reject) => {
        resolve(toDoList);
    });
}