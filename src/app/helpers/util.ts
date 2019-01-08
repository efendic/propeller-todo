import { ITodo } from '../models'
export const isEmpty = object => object && Object.keys(object).length === 0 || object === undefined || object === "undefined";

export const addToList = name => {
    let list = getList();

    if (!list) {
        list = [];
    }

    let todo: ITodo = {
        _id: list.length,
        name: name,
        isDone:false
    }
    list.push(todo);
    updateTodoListStorage(list);
}

export const removeFromList = (todo: ITodo) => {
    let list = <ITodo[]>getList();    
    let i = list.findIndex(x => x._id == todo._id);
    if (i) {
        list.splice(i, 1);
        updateTodoListStorage(list);
    }
}

export const updateTodo = (todo: ITodo) => {
    let list = <ITodo[]>getList();    
    let i = list.findIndex(x => x._id == todo._id);
    if (i) {
        list[i] = todo;
        updateTodoListStorage(list);
    }
}

//TODO: dodati tip koji funkcija vraca a treba biti array ITodo
export const getList = () => {
    const result = localStorage.getItem('todo_list');
    if (!isEmpty(result)) return JSON.parse(result);
    return result;
}

const updateTodoListStorage = (list: ITodo[]) => {
    localStorage.setItem('todo_list', JSON.stringify(list));
}