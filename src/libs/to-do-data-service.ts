import ToDoList from "../interfaces/todo-list";
import ToDoItem from "../interfaces/todo";

const toDoData: ToDoItem[] = [{ text: "Some Item", checked: false }, { text: "Do Dishes", checked: true }, { text: "Yard Work", checked: false }, { text: "Make dinner", checked: false }];
const prevToDoData: ToDoItem[] = [{ text: "Stuff", checked: true }, { text: "Cat litter", checked: true }, { text: "Dishes", checked: true }, { text: "Make dinner", checked: true }, { text: "Laundry", checked: true }];
const toDoList: ToDoList = { title: "Monday ToDo List", toDoItems: toDoData, active: true, id: 1, dateCreated: new Date() };
const prevToDoList: ToDoList = { title: "Sunday To Do List", toDoItems: prevToDoData, active: false, id: 5, dateCreated: new Date() };

export function GetActiveToDos(): Promise<ToDoList[] | null> {
    return new Promise<ToDoList[] | null>((resolve, reject) => {
        let data: ToDoList[] = [toDoList, { title: "Other list", toDoItems: toDoData, active: true, id: 2, dateCreated: new Date() }, { title: "Weekly To Dos", toDoItems: toDoData, active: true, id: 3, dateCreated: new Date() }];
        resolve(data);
    });
}
export function GetToDo(id: number): Promise<ToDoList | null> {
    return new Promise<ToDoList | null>((resolve, reject) => {
        resolve(toDoList);
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