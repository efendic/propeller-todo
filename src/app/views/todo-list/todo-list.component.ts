import { Component, OnInit, VERSION, OnDestroy } from '@angular/core';
import { ITodo } from 'src/app/models';

import { getList, removeFromList, updateTodo } from '../../helpers/util'

@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    /* ngVersion: string = VERSION.full;
    matVersion: string = '5.1.0'; */
    breakpoint: number;
    constructor() { }

    todos: ITodo[];
    filterIsDone?: boolean;

    ngOnInit() {
        this.breakpoint = (window.innerWidth <= 666) ? 2 : 4;
        this.todos = getList(); 
    }

    removeTodo(todo: ITodo) {
        removeFromList(todo);
        this.todos = getList();
    }

    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 666) ? 2 : 4;
      }

    toggleIsDone(todo: ITodo) {
        todo.isDone = !todo.isDone;
        updateTodo(todo);
        this.todos = getList();
    }

    toggleFilterIsDone(filterIsDone?:boolean) {
        // ideally we should have original list, if we do filter on client side....  
        // else backend filters data
        this.todos = getList();

        if (filterIsDone != null) {
            this.todos = this.todos.filter(x => x.isDone === filterIsDone);
        }        
    }
}
