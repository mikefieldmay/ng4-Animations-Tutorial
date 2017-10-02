import { Component } from '@angular/core';
import { trigger, state, style } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      }))
    ])
  ] // we specify the animations this component should be aware of
})

export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal'; // angular animation transfers from one state to another

	onAdd(item) {
		this.list.push(item);
	}

	onDelete(item) {
		this.list.splice(this.list.indexOf(item), 1);
	}
}
