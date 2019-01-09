import { Component } from '@angular/core';
import {addToList} from '../../helpers/util'

@Component({
    selector: 'todo-add.component.scss',
    templateUrl: 'todo-add.component.html'
})

export class TodoAddComponent {
    name: string;

    addTodo() {        
        addToList(this.name);
        this.name = null;
    }
}