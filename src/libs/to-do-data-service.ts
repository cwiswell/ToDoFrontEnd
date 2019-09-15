import ToDoList from "../toDoComponent/todo-list.interface";
import ToDoItem from "../toDoComponent/todo.class";

const toDoData: ToDoItem[] = [{text:"Some Item",checked: false}, {text: "Do Dishes", checked: true}, {text: "Yard Work",checked: false}, {text: "Make dinner", checked: false}];
const toDoList: ToDoList = { title: "Monday ToDo List", toDoItems: toDoData };
const prevToDoList: ToDoList = { title: "Sunday To Do List", toDoItems: toDoData };

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