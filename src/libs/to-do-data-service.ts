import ToDoList from "../toDoComponent/todo-list.interface";
import ToDoItem from "../toDoComponent/todo.interface";

const toDoData: ToDoItem[] = [{text:"Some Item",checked: false}, {text: "Do Dishes", checked: true}, {text: "Yard Work",checked: false}, {text: "Make dinner", checked: false}];
const prevToDoData: ToDoItem[] = [{text:"Stuff",checked: true}, {text: "Cat litter", checked: true}, {text: "Dishes",checked: true}, {text: "Make dinner", checked: true}, {text: "Laundry", checked: true}];
const toDoList: ToDoList = { title: "Monday ToDo List", toDoItems: toDoData };
const prevToDoList: ToDoList = { title: "Sunday To Do List", toDoItems: prevToDoData };

export function GetActiveToDos(): Promise<ToDoList[] | null> {
    return new Promise<ToDoList[] | null>((resolve, reject) => {
        let data: ToDoList[] = [toDoList, {title: "Other list", toDoItems: toDoData},{title: "Weekly To Dos", toDoItems: toDoData}];
        resolve(data);
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